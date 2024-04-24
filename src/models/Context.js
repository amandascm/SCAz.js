class Context {
    static getInstance () {
        if (!this.instance) {
            this.instance = new Context()
        }
        return this.instance
    }

    setUUID (uuid) {
        this.uuid = uuid
    }

    getUUID () {
        return this.uuid
    }
}

module.exports = Context