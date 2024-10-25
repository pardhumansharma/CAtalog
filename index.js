const fs = require('fs');

function decodeValue(value, base) {
  return BigInt(parseInt(value, base));
}

function lagrangeInterpolation(xValues, yValues, targetX) {
  let constantTerm = BigInt(0);
  const k = xValues.length;

  for (let i = 0; i < k; i++) {
    let term = yValues[i];
    for (let j = 0; j < k; j++) {
      if (i !== j) {
        term *= BigInt(targetX - xValues[j]) / BigInt(xValues[i] - xValues[j]);
      }
    }
    constantTerm += term;
  }
  
  return constantTerm;
}

function main() {
  const data = JSON.parse(fs.readFileSync('input.json', 'utf8'));;
  const n = data.keys.n;
  const k = data.keys.k;

  const xValues = [];
  const yValues = [];

  for (let i = 1; i <= n; i++) {
    if (data[i.toString()]) {
      const x = i;
      const y = decodeValue(data[i.toString()].value, parseInt(data[i.toString()].base));
      xValues.push(x);
      yValues.push(y);
    }
  }

  if (xValues.length < k) {
    console.error("Not enough points to solve the polynomial.");
    return;
  }

  const secretConstant = lagrangeInterpolation(xValues.slice(0, k), yValues.slice(0, k), 0);
  console.log("The secret constant term (c) is:", secretConstant.toString());
}

main();
