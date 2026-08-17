export const gcd = (a, b) => {
  a = Math.abs(parseInt(a));
  b = Math.abs(parseInt(b));
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
};

export const lcm = (a, b) => {
  a = Math.abs(parseInt(a));
  b = Math.abs(parseInt(b));
  if (a === 0 || b === 0) return 0;
  return (a * b) / gcd(a, b);
};

export const decimalToFraction = (decimalInput) => {
  const dec = parseFloat(decimalInput);
  if (isNaN(dec)) return '';
  if (Number.isInteger(dec)) return `${dec}/1`;

  const stringDec = dec.toString();
  const decimalPlaces = stringDec.split('.')[1].length;
  const denominator = Math.pow(10, decimalPlaces);
  const numerator = Math.round(dec * denominator);

  const commonDivisor = gcd(numerator, denominator);

  return `${numerator / commonDivisor}/${denominator / commonDivisor}`;
};
