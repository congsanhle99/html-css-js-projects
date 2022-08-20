const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = () => {
  const symbols = "!@#$%^&*(){}=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (upper, lower, number, symbol, length) => {
  let generatePassword = "";
  // xem bao nhiêu cái được checked
  const typesCount = upper + lower + number + symbol;
  // đưa về 1 mảng các object
  // lọc lấy các phần tử true
  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter((item) => Object.values(item)[0]);
  if (typesCount === 0) {
    return "";
  }
  for (let i = 0; i < length; i++) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatePassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatePassword.slice(0, length);
  return finalPassword;
};

// copy to clipboard
clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("password copied");
});

const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});
