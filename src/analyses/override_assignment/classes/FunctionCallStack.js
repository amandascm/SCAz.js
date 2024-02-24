const FunctionCall = require('./FunctionCall')

function reverseArray(arr) {
    var reversed = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

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
            return (reverseArray(this.stack).find(f => f.getBranch() !== undefined)).getBranch()
        }
        return undefined
    }

    isEmpty() {
        return this.stack.length === 0
    }

    describe() {
        return reverseArray(this.stack).reduce((acc, curr) => {
            return `${acc}${curr.getTrace()}\n`
        }, (this.stack.length ? 'Function call stack:\n' : ''))
    }
}

module.exports = FunctionCallStack