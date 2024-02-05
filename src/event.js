const Context = require('./context')

const EventTypeEnum = {
    OVERRIDE_ASSIGNMENT: 'OVERRIDE_ASSIGNMENT_CONFLICT',
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
    constructor(uuid, events) {
        this.uuid = uuid
        this.events = events.map(event => event instanceof Event ? event : new Event(event.type, event.label, event.body))
    }

    toObject() {
        return {
            uuid: this.uuid,
            events: this.events.map(event => event.toObject())
        }
    }

    static fromObject(obj) {
        return new EventBatch(obj.uuid, obj.events)
    }

    getEvents() {
        return this.events
    }
}

class EventController {
    static buildBatch (uuid, events) {
        return new EventBatch(uuid, events)
    }

    static batchToRecoverableString (eventBatch) {
        return JSON.stringify(eventBatch.toObject())
    }

    static recoverBatchFromString(inputString) {
        const currentUuid = Context.getInstance().getUUID();
        const regexPattern = new RegExp(`\\{\"uuid\":\\s*\"${currentUuid}\",\\s*\"events\":\\s*\\[.*\\]\\}`);
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