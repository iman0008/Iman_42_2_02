//1

// function extractNumbers(str) {
//     return str.match(/\d+/g).map(Number);
// }
//
// console.log(extractNumbers("a1fg5hj6")); // [1, 5, 6]

//2

// function fibonacciWithDelay(a = 0, b = 1) {
//     if (a > 144) return;
//     console.log(a);
//     setTimeout(() => fibonacciWithDelay(b, a + b), 1000);
// }
//
// fibonacciWithDelay();

//3

// async function fetchProductTitles() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const products = await response.json();
//         products.forEach(product => {
//             console.log(product.title);
//         });
//     } catch (error) {
//         console.error('Failed to fetch product titles:', error);
//     }
// }
//
// fetchProductTitles();


//4

//     document.getElementById('color-buttons').addEventListener('click', function(event) {
//     if (event.target.tagName === 'BUTTON') {
//     const color = event.target.textContent;
//     document.body.style.backgroundColor = color;
// }
// });


//5


// const toggleBlock = document.getElementById('toggle-block');
// const toggleButton = document.getElementById('toggle-button');
//
// toggleButton.addEventListener('click', () => {
//     if (toggleBlock.style.display === 'none') {
//         toggleBlock.style.display = 'block';
//         toggleButton.textContent = 'Hide Block';
//     } else {
//         toggleBlock.style.display = 'none';
//         toggleButton.textContent = 'Show Block';
//     }
// });

//6

// let counterValue = 0;
// const counterElement = document.getElementById('counter');
//
// const intervalId = setInterval(() => {
//     if (counterValue >= 100) {
//         clearInterval(intervalId);
//     } else {
//         counterValue++;
//         counterElement.textContent = counterValue;
//     }
// }, 1);

//7

// async function fetchData() {
//     try {
//         const response = await fetch('data.json');
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Failed to fetch data:', error);
//     }
// }
//
// document.getElementById('fetch-button').addEventListener('click', fetchData);