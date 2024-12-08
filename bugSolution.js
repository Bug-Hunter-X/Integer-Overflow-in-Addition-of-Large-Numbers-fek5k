function myFuncSafe(a, b) {
  if (typeof a !== 'bigint' || typeof b !== 'bigint') {
    throw new Error('Inputs must be bigints to avoid potential overflow');
  }
  if (a > b) {
    return a + b;
  } else {
    return a - b;
  }
}

// Use BigInt to avoid overflow
let resultSafe = myFuncSafe(BigInt(Number.MAX_SAFE_INTEGER), BigInt(Number.MAX_SAFE_INTEGER - 1));
console.log(resultSafe); // Output: 2*Number.MAX_SAFE_INTEGER -1 (correct)

// Alternative approach using checks
function myFuncCheck(a,b) {
  if (a > 0 && b > Number.MAX_SAFE_INTEGER - a) {
    throw new Error("Overflow detected");
  } else if (a < 0 && b < Number.MIN_SAFE_INTEGER -a) {
    throw new Error("Underflow detected");
  } else {
    return a + b;
  }
}
let resultCheck = myFuncCheck(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER-1);
console.log(resultCheck); // Throws error