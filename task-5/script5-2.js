const dollarPrice = 26;
const euroPrice = 30;
const money = prompt ("Виберіть валюту: Euro або Dollar")
if (money.toLowerCase() === "dollar") {
  let result = "";
  for (let i = 10; i <= 100; i += 10) {
    let uah = i * dollarPrice;
    result += `${i}$ = ${uah}₴\n`;
  }
console.log(result);
} else if (money.toLowerCase() === "euro") {
  let result = "";
  for (let i = 10; i <= 100; i += 10) {
  let uah = i * euroPrice;
  result += `${i}$ = ${uah}₴\n`;
  }
  console.log(result);
}

