function rot13(str) {
  let cipher = "";

  const strArray = str.split("");
  strArray.forEach((letter) => {
    if (letter.charCodeAt(0) <= 90 && letter.charCodeAt(0) >= 65) {
      let cipherAscii = ((letter.charCodeAt(0) - 65 + 13) % 26) + 65;
      let cipherLetter = String.fromCharCode(cipherAscii);
      cipher += cipherLetter;
    } else {
      cipher += letter;
    }
  });
  return cipher;
}
