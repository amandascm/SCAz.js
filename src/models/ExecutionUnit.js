class ExecutionUnit {
    constructor(inputPath, command, uuid, precommand = undefined) {
        this.inputPath = inputPath
        this.command = command
        this.precommand = precommand
        this.uuid = uuid
    }

    getUUID = () => this.uuid
}

module.exports = ExecutionUnit