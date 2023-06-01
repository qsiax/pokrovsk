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


const documentItems = document.querySelectorAll('.document__item');

function addFrame() {
    for (let i = 0; i < documentItems.length; i++) {
        documentItems[i].addEventListener('click', (event) => {
            var eventTarget = event.target;
            var eventCurrentTarget = event.currentTarget;

            for(let i = 0; i < documentItems.length; i++) {
                const frame = documentItems[i].querySelector('.iframe-container')
                if(frame) {
                    frame.remove();
                }
                documentItems[i].classList.remove('active')
            }

            documentItems[i].classList.add('active')

            if(documentItems[i].getAttribute('data-frame') == 'active') {
                const frameTarget = documentItems[i].querySelector('.iframe-container');
                if(frameTarget) {
                    frameTarget.remove()
                }
                documentItems[i].setAttribute('data-frame', '')
                documentItems[i].classList.remove('active')
            } else {
                eventTarget.innerHTML += `<div class="iframe-container">
                <iframe src="/source/document/${[i]}.pdf#toolbar=1&navpanes=0&scrollbar=0" frameborder="0" id="frame"> 
                </iframe>
                </div>`;
                documentItems[i].setAttribute('data-frame', 'active')
            }
        })
    }
}

addFrame()


const inputDate = document.querySelectorAll('.__select__label')
const reset = document.querySelector('.__reset')

const input23 = document.getElementById('2023');
const input22 = document.getElementById('2022');
const input21 = document.getElementById('2021');
const input20 = document.getElementById('2020');
const input19 = document.getElementById('2019');
const input18 = document.getElementById('2018');

reset.addEventListener('click', () => {
    for(i = 0; i < documentItems.length; i++){
        documentItems[i].classList.remove('undate')
        selectSingle_title.textContent = 'год публикации'
    }
})

input23.addEventListener('click', () => {
    for(i = 0; i < documentItems.length; i++){
        documentItems[i].classList.remove('undate')
    }
    for(i = 0; i < documentItems.length; i++) {
        var itemData = documentItems[i].getAttribute('data-date')

        if(itemData !== "2023") {
            documentItems[i].classList.add('undate')
        }
    }
})

input22.addEventListener('click', () => {
    for(i = 0; i < documentItems.length; i++){
        documentItems[i].classList.remove('undate')
    }
    for(i = 0; i < documentItems.length; i++) {
        var itemData = documentItems[i].getAttribute('data-date')

        if(itemData !== "2022") {
            documentItems[i].classList.add('undate')
        }
    }
})

input21.addEventListener('click', () => {
    for(i = 0; i < documentItems.length; i++){
        documentItems[i].classList.remove('undate')
    }
    for(i = 0; i < documentItems.length; i++) {
        var itemData = documentItems[i].getAttribute('data-date')

        if(itemData !== "2021") {
            documentItems[i].classList.add('undate')
        }
    }
})


input20.addEventListener('click', () => {
    for(i = 0; i < documentItems.length; i++){
        documentItems[i].classList.remove('undate')
    }
    for(i = 0; i < documentItems.length; i++) {
        var itemData = documentItems[i].getAttribute('data-date')

        if(itemData !== "2020") {
            documentItems[i].classList.add('undate')
        }
    }
})

input19.addEventListener('click', () => {
    for(i = 0; i < documentItems.length; i++){
        documentItems[i].classList.remove('undate')
    }
    for(i = 0; i < documentItems.length; i++) {
        var itemData = documentItems[i].getAttribute('data-date')

        if(itemData !== "2019") {
            documentItems[i].classList.add('undate')
        }
    }
})

input18.addEventListener('click', () => {
    for(i = 0; i < documentItems.length; i++){
        documentItems[i].classList.remove('undate')
    }
    for(i = 0; i < documentItems.length; i++) {
        var itemData = documentItems[i].getAttribute('data-date')

        if(itemData !== "2018") {
            documentItems[i].classList.add('undate')
        }
    }
})





