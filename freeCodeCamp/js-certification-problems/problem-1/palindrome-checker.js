function palindrome(str) {
  const strCleaned = str.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  const strArray = strCleaned.split("");
  for (let i = 0; i <= Math.floor(strArray.length - 1 / 2); i++) {
    if (strArray[i] !== strArray[strArray.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
