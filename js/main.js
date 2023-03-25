const API_URL = 'https://api.adviceslip.com/advice';
window.addEventListener("load", () => {
    generateAdvice();
});


const generateAdviceElem = document.getElementById("generate-advice");
const adviceIdElem = document.getElementById("advice-id");
const adviceTextElem = document.querySelector(".advice-description");
const adviceCardElem = document.querySelector('.advice-card');
const adviceTextContainerElem = document.getElementById('advice-text-container');

generateAdviceElem.addEventListener("click", () => {
    generateAdvice();
});

function generateAdvice() {
    fetch(API_URL)
        .then(response => response.json())
        .then((response)=> {
            if (adviceCardElem.classList.contains('advice-card--disable')) {
                adviceCardElem.classList.remove('advice-card--disable');
            }
            let clonedAdviceTextElem =  adviceTextElem.cloneNode(true);
            let clonedAdviceTextElems = document.querySelectorAll('.advice-description');
            clonedAdviceTextElems.forEach((elem) => {
                elem.remove();
            })

            adviceIdElem.textContent = response.slip.id;
            clonedAdviceTextElem.textContent = response.slip.advice;
            adviceTextContainerElem.appendChild(clonedAdviceTextElem);
        })
}
