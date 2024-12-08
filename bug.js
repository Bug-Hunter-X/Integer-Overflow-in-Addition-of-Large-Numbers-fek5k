function myFunc(a, b) {
  if (a > b) {
    return a + b;
  } else {
    return a - b;
  }
}

// Unexpected behavior when a and b are very large numbers
let result = myFunc(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER - 1);
console.log(result); // Output: 1, expected: 2*Number.MAX_SAFE_INTEGER -1

// The issue is that the sum a+b might exceed Number.MAX_SAFE_INTEGER, causing loss of precision and unexpected result.