const FunctionCall = require('./FunctionCall')

class FunctionCallStack {
    constructor () {
        this.stack = []
    }

    push(func) {
        if (func instanceof FunctionCall) {
            this.stack.push(func)
        } else {
            throw new Error(`[FunctionCallStack] New element must be an instance of ${FunctionCall.name}`)
        }
    }    

    pop(_) {
        return this.stack.pop()
    }

    getBranch() {
        if (!this.isEmpty()) {
            return this.stack.at(-1).getBranch()
        }
        return undefined
    }

    isEmpty() {
        return this.stack.length === 0
    }

    describe() {
        return this.stack.reverse().reduce((acc, curr) => {
            return `${acc}${curr.getTrace()}\n`
        }, (this.stack.length ? 'Function call stack:\n' : ''))
    }
}

module.exports = FunctionCallStack