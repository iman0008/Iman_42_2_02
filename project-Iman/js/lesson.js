// PHONE CHECKER
const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");
const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK";
        phoneResult.style.color = "green";
    } else {
        phoneResult.innerHTML = "NOT OK";
        phoneResult.style.color = "red";
    }
};


const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabItems = document.querySelectorAll(".tab_content_item");
const tabParent = document.querySelector(".tab_content_items");

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = "none";
    })
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    })
}
const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = "block";
    tabItems[index].classList.add('tab_content_item_active');
}
    hideTabContent();
    showTabContent();

    tabParent.onclick = (event) => {
        if (event.target.classList.contains('tab_content_item')) {
            tabItems.forEach((item, index) => {
                if (event.target === item) {
                    hideTabContent();
                    showTabContent(index);

                }
            })
        }
    }

let index = 0
setInterval(()=> {
    if (index < 4) {
        index++
    }else {
        index = 0
    }
    hideTabContent()
    showTabContent(index)
}, 4000)


const xhr = new XMLHttpRequest()
xhr.open('GET', '../data/data.json')
xhr.onload = () => {
    const response = JSON.parse(xhr.response)
    console.log(response)
}
xhr.send()


//converter

// const usdInput = document.querySelector('#usd');
// const somInput = document.querySelector('#som');
// const eurInput = document.querySelector('#eur');
//
// const converter = (element, targetElement) => {
//     element.oninput = () => {
//         const request = new XMLHttpRequest();
//         request.open('GET', '../data/converter.json')
//         request.setRequestHeader('Content-Type', 'application/json')
//         request.send()
//
//         request.onload = () => {
//             const data = JSON.parse(request.response)
//             if (element.id === 'som'){
//                 targetElement.value = (element.value / data.usd).toFixed(2)
//             }
//             if (element.id === 'usd'){
//                 targetElement.value = (element.value * data.usd).toFixed(2)
//             }
//             if (element.value === '') {
//                 targetElement.value = ''
//             }
//
//         }
//     }
// }
//
// converter(usdInput, somInput)
// converter(somInput, usdInput)



const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const eurInput = document.querySelector('#eur');

const converter = (element, targetElements) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);
            const usdRate = data.usd;
            const eurRate = data.eur;

            if (element.id === 'som') {
                targetElements.usd.value = (element.value / usdRate).toFixed(2);
                targetElements.eur.value = (element.value / eurRate).toFixed(2);
            }
            if (element.id === 'usd') {
                targetElements.som.value = (element.value * usdRate).toFixed(2);
                targetElements.eur.value = (element.value * (usdRate / eurRate)).toFixed(2);
            }
            if (element.id === 'eur') {
                targetElements.som.value = (element.value * eurRate).toFixed(2);
                targetElements.usd.value = (element.value * (eurRate / usdRate)).toFixed(2);
            }

            if (element.value === '') {
                targetElements.usd.value = '';
                targetElements.som.value = '';
                targetElements.eur.value = '';
            }
        };
    };
};

converter(somInput, { usd: usdInput, eur: eurInput });
converter(usdInput, { som: somInput, eur: eurInput });
converter(eurInput, { usd: usdInput, som: somInput });



