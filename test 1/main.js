// 1

// function isNumeric(str) {
//   return /^\d+$/.test(str);
//   console.log(isNumeric("12345")); //true
//   console.log(isNumeric("123a45")); //false
//   console.log(isNumeric("")); //false
// }
// 2

// function logEverySecond() {
//   setInterval(() => {
//     console.log("Прошла секунда");
//   }, 1000);
// }

// // Запуск функции
// logEverySecond();
// 3

// function printNumbers() {
//   let number = 1;
//   const intervalId = setInterval(() => {
//     console.log(number);
//     if (number === 10) {
//       clearInterval(intervalId); // Остановить интервал, когда достигнет 10
//     }
//     number++;
//   }, 1000);
// }

// // Запуск функции
// printNumbers();

// 4
document.getElementById("colorBox").addEventListener("click", function () {
  this.classList.toggle("bg-color");
});

// 5
// const xhr = new XMLHttpRequest();
// const url = "data.json";

// const params = {
//   key1: "value",
//   key2: "value",
//   key3: "value",
// };

// const queryString = new URLSearchParams(params).toString();
// xhr.open("GET", `${url}?${queryString}`, true);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.responseText);
//   }
// };

// xhr.send();
