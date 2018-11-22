// Big-O - used to explain algorithimic complexity - how runtime behaves on different load
// How many steps function takes to perform certain task

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
// for 100 elements - 14ms
// for 10000 elements - 300ms
// for 100000 elements - 10500ms
// for 1000000 elements - 135000ms

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") [console.log("FOUND NEMO!")];
  }
  let t1 = performance.now();
  console.log(`Call to find Nemo took ${t1 - t0} milliseconds`);
}

findNemo(large);
