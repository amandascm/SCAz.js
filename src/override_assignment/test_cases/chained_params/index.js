var something = 0

function return1 () {
  something = 1
  return 1
}

function return2 () {
  something = 2
  return 2
}

function sum3vars (var1, var2, var3) {
  return var1 + var2 + var3
}

sum3vars(
  return1(), // LEFT
  3,
  return2() // RIGHT
)