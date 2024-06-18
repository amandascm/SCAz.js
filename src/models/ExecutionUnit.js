class ExecutionUnit {
    constructor(inputPath, command, uuid) {
        this.inputPath = inputPath
        this.command = command
        this.uuid = uuid
    }

    getUUID = () => this.uuid
}

module.exports = ExecutionUnit