# Integer Overflow Bug in JavaScript

This repository demonstrates a common bug in JavaScript involving integer overflow when adding very large numbers.  The `myFunc` function is designed to add or subtract two numbers depending on their relative magnitudes, but it fails when the numbers are close to `Number.MAX_SAFE_INTEGER`.

The bug is caused by the limitation of JavaScript's number type which uses double-precision floating-point numbers and not arbitrary-precision integers.  When the sum of two numbers exceeds the maximum safe integer value, precision is lost resulting in incorrect results.  This issue is important to understand when dealing with large numerical values in JavaScript.

## Solution

The solution is to use a library that supports arbitrary-precision arithmetic (like BigInt) or to use careful checks to prevent an overflow condition.