const Context = require('./../models/Context')
const { EventBatch } = require('./../models/Event')

class EventService {
    static buildBatch (uuid, data, events) {
        return new EventBatch(uuid, data, events)
    }

    static batchToRecoverableString (eventBatch) {
        return JSON.stringify(eventBatch.toObject())
    }

    static recoverBatchFromString(inputString) {
        const currentUuid = Context.getInstance().getUUID();
        const regexPattern = new RegExp(`\\{\"uuid\":\\s*\"${currentUuid}\",\\s*\"data\":\\s*\\{.*\\},\\s*\"events\":\\s*\\[.*\\]\\}`);
        const match = inputString.match(regexPattern);
        if (match) {
            const capturedObject = JSON.parse(match[0]);
            const eventBatch = EventBatch.fromObject(capturedObject)
            return eventBatch
        } else {
            console.log('No match found.');
            return undefined
        }
    }
}

module.exports = {
    EventService
}