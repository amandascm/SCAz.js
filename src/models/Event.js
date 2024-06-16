const EventTypeEnum = {
    OVERRIDING_ASSIGNMENT: 'OVERRIDING_ASSIGNMENT',
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

module.exports = {
    Event,
    EventBatch,
    EventTypeEnum
}