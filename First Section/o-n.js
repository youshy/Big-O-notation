// O(n) - linear time (big O of n)
// Proportional time increase

const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "gill",
  "nemo",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank"
];
const large = new Array(100).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") [console.log("FOUND NEMO!")];
  }
}
