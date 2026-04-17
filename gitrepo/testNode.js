function sum(a, b) {
  return a + b;
}

// simple test (no jest needed)
if (sum(1, 2) !== 3) {
  console.error("Test failed");
  process.exit(1);
}

console.log("Test passed");
