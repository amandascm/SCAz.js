const Context = require('./context')

const EventTypeEnum = {
    OVERRIDING_ASSIGNMENT: 'OVERRIDING_ASSIGNMENT_CONFLICT',
    ERROR: 'ERROR',
}

class Event {
    constructor(type, label, body) {
        this.type = type
        this.label = label
        this.body = body
    }

    toObject() {
        return Object.assign({}, this);
    }

    static fromObject(obj) {
        return new Event(obj.type, obj.label, obj.body)
    }
}

class EventBatch {
    constructor(uuid, data, events) {
        this.uuid = uuid
        this.data = data
        this.events = events.map(event => event instanceof Event ? event : new Event(event.type, event.label, event.body))
    }

    toObject() {
        return {
            uuid: this.uuid,
            data: this.data,
            events: this.events.map(event => event.toObject())
        }
    }

    static fromObject(obj) {
        return new EventBatch(obj.uuid, obj.data, obj.events)
    }

    getEvents() {
        return this.events
    }
}

class EventController {
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
    Event,
    EventBatch,
    EventController,
    EventTypeEnum
}