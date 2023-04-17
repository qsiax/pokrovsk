// SELECT
const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

const archiveBtn = document.querySelector('.__archive');

selectSingle_title.addEventListener('click', () => {
if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
} else {
    selectSingle.setAttribute('data-state', 'active');
}
});

for (let i = 0; i < selectSingle_labels.length; i++) {
selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
});
}

// MAIN
const documentBody01 = document.querySelector('#documentBody01'),
documentBody02 = document.querySelector('#documentBody02'),
documentBody03 = document.querySelector('#documentBody03'),
documentBody04 = document.querySelector('#documentBody04'),
documentBody05 = document.querySelector('#documentBody05'),
documentBody06 = document.querySelector('#documentBody06');

let documentTrigger = document.getElementsByClassName("document__head-item");
for (let i = 0; i < documentTrigger.length; i++) {
documentTrigger[i].addEventListener('click', function() { 

for (let i = 0; i < documentTrigger.length; i++) {
    documentTrigger[i].classList.remove('active');
}
this.classList.add('active');

if(documentTrigger[0].classList.contains('active')) {
    documentBody01.classList.add('active')
} else {
    documentBody01.classList.remove('active')
}

if(documentTrigger[1].classList.contains('active')) {
    documentBody02.classList.add('active')
} else {
    documentBody02.classList.remove('active')
}

if(documentTrigger[2].classList.contains('active')) {
    documentBody03.classList.add('active')
} else {
    documentBody03.classList.remove('active')
}

if(documentTrigger[3].classList.contains('active')) {
    documentBody04.classList.add('active')
} else {
    documentBody04.classList.remove('active')
}

if(documentTrigger[4].classList.contains('active')) {
    documentBody05.classList.add('active')
} else {
    documentBody05.classList.remove('active')
}

if(documentTrigger[5].classList.contains('active')) {
    documentBody06.classList.add('active')
} else {
    documentBody06.classList.remove('active')
}

})
}