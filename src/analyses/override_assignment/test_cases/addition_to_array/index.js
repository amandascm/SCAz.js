// Conflict: [left, m():3] --> [right, m():4]
function f() {
    var validParameterAnnotations = [];
    validParameterAnnotations.push("LEFT"); // LEFT
    console.log(validParameterAnnotations.join(', '));
    validParameterAnnotations.pop() // RIGHT
  }

f();
