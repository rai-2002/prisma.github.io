// let paragraphs = document.querySelectorAll('.text-reveal p');

// paragraphs.forEach(paragraph => {
//     let htmlString = '';
//     let pArray = paragraph.textContent.split('');
//     for(let i = 0; i< pArray.length; i++){
//         htmlString += `<span>${pArray[i]}</span>`;
//     }
//     paragraph.innerHTML = htmlString;
// });

// let spans = document.querySelectorAll('.text-reveal span');

// function revealSpans() {
//     spans.forEach(span => {
//         if(span.getBoundingClientRect().top < window.innerHeight / 2){
//             let {left, top} = span.getBoundingClientRect();
//             top = top - (window.innerHeight * .4); //the start of the effect
//             let opacityValue = 1 - ((top * .1) + (left * 0.001)) < 0.1 ? 0.1 : 1 - ((top * .01) + (left * 0.001)).toFixed(3);
//             opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
//             span.style.opacity = opacityValue;
//         }
//     });
// }

// window.addEventListener('scroll', () => {
//     revealSpans()
// });

let paragraphs = [...document.querySelectorAll('.text-reveal p')];
let spans =[];

paragraphs.forEach(paragraph => {
    let htmlString = '';
    let pArray = paragraph.textContent.split('');
    for(let i = 0; i< pArray.length; i++){
        htmlString += `<span>${pArray[i]}</span>`;
    }
    paragraph.innerHTML = htmlString;
})

spans = [...document.querySelectorAll('.text-reveal span')];

function revealSpans(){
    for(let i = 0; i < spans.length; i++){
        if(spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2){
            let {left, top} = spans[i].getBoundingClientRect();
            top = top - (window.innerHeight * .5); //the start of the effect
            let opacityValue = 1 - ((top * .1) + (left * 0.001)) < 0.1 ? 0.1 : 1 - ((top * .01) + (left * 0.001)).toFixed(3);
            opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
            spans[i].style.opacity = opacityValue;
        }
    }
}

window.addEventListener('scroll', () => {
    revealSpans()
})
//revealSpans()
