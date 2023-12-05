function convertToRoman(num) {
  let romanNumeral = "";
  const conversionChart = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  const denominations = Object.values(conversionChart);
  for (let i = 0; i < denominations.length; i++) {
    while (num >= denominations[i]) {
      romanNumeral += Object.keys(conversionChart).find(
        (key) => conversionChart[key] === denominations[i]
      );
      num -= denominations[i];
    }
  }
  console.log(romanNumeral);

  return romanNumeral;
}
