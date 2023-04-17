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

        // HEAD
        const element01 = document.querySelector("#study-01"),
            element02 = document.querySelector("#study-02"),
            element03 = document.querySelector("#study-03"),
            element04 = document.querySelector("#study-04"),
            element05 = document.querySelector("#study-05");

        const elementBody01 = document.querySelector('#study-content-01'),
            elementBody02 = document.querySelector('#study-content-02'),
            elementBody03 = document.querySelector('#study-content-03'),
            elementBody04 = document.querySelector('#study-content-04'),
            elementBody05 = document.querySelector('#study-content-05');

        function studyClick01() {
                element01.classList.add('active')
                elementBody01.classList.add('active')
                selectSingle.classList.remove('include')
                archiveBtn.classList.remove('active')

                element02.classList.remove('active')
                element03.classList.remove('active')
                element04.classList.remove('active')
                element05.classList.remove('active')

                elementBody02.classList.remove('active')
                elementBody03.classList.remove('active')
                elementBody04.classList.remove('active')
                elementBody05.classList.remove('active')

        }

        function studyClick02() {
                element02.classList.add('active')
                elementBody02.classList.add('active')
                selectSingle.classList.remove('include')

                element01.classList.remove('active')
                element03.classList.remove('active')
                element04.classList.remove('active')
                element05.classList.remove('active')

                elementBody01.classList.remove('active')
                elementBody03.classList.remove('active')
                elementBody04.classList.remove('active')
                elementBody05.classList.remove('active')

        }

        function studyClick03() {
                element03.classList.add('active')
                elementBody03.classList.add('active')
                selectSingle.classList.add('include')
                archiveBtn.classList.remove('active')

                element02.classList.remove('active')
                element01.classList.remove('active')
                element04.classList.remove('active')
                element05.classList.remove('active')

                elementBody02.classList.remove('active')
                elementBody01.classList.remove('active')
                elementBody04.classList.remove('active')
                elementBody05.classList.remove('active')

        }

        function studyClick04() {
                element04.classList.add('active')
                elementBody04.classList.add('active')
                selectSingle.classList.remove('include')
                archiveBtn.classList.add('active')

                element02.classList.remove('active')
                element03.classList.remove('active')
                element01.classList.remove('active')
                element05.classList.remove('active')

                elementBody02.classList.remove('active')
                elementBody03.classList.remove('active')
                elementBody01.classList.remove('active')
                elementBody05.classList.remove('active')
        }

        function studyClick05() {
                element05.classList.add('active')
                elementBody05.classList.add('active')
                selectSingle.classList.remove('include')
                archiveBtn.classList.remove('active')

                element02.classList.remove('active')
                element03.classList.remove('active')
                element04.classList.remove('active')
                element01.classList.remove('active')

                elementBody02.classList.remove('active')
                elementBody03.classList.remove('active')
                elementBody04.classList.remove('active')
                elementBody01.classList.remove('active')
        }
        
        // GROUP
        const groupElementBody01 = document.querySelector('#group-body01'),
            groupElementBody02 = document.querySelector('#group-body02'),
            groupElementBody03 = document.querySelector('#group-body03'),
            groupElementBody04 = document.querySelector('#group-body04'),
            groupElementBody05 = document.querySelector('#group-body05'),
            groupElementBody06 = document.querySelector('#group-body06'),
            groupElementBody07 = document.querySelector('#group-body07'),
            groupElementBody08 = document.querySelector('#group-body08'),
            groupElementBody09 = document.querySelector('#group-body09'),
            groupElementBody010 = document.querySelector('#group-body010');


        let groupTrigger = document.getElementsByClassName("study__item-group");
        for (let i = 0; i < groupTrigger.length; i++) {
        groupTrigger[i].addEventListener('click', function() { 

            for (let i = 0; i < groupTrigger.length; i++) {
            groupTrigger[i].classList.remove('active');
            }
            this.classList.add('active');

            if(groupTrigger[0].classList.contains('active')) {
                groupElementBody01.classList.add('active')
            } else {
                groupElementBody01.classList.remove('active')
            }

            if(groupTrigger[1].classList.contains('active')) {
                groupElementBody02.classList.add('active')
            } else {
                groupElementBody02.classList.remove('active')
            }

            if(groupTrigger[2].classList.contains('active')) {
                groupElementBody03.classList.add('active')
            } else {
                groupElementBody03.classList.remove('active')
            }

            if(groupTrigger[3].classList.contains('active')) {
                groupElementBody04.classList.add('active')
            } else {
                groupElementBody04.classList.remove('active')
            }

            if(groupTrigger[4].classList.contains('active')) {
                groupElementBody05.classList.add('active')
            } else {
                groupElementBody05.classList.remove('active')
            }

            if(groupTrigger[5].classList.contains('active')) {
                groupElementBody06.classList.add('active')
            } else {
                groupElementBody06.classList.remove('active')
            }

            if(groupTrigger[6].classList.contains('active')) {
                groupElementBody07.classList.add('active')
            } else {
                groupElementBody07.classList.remove('active')
            }

            if(groupTrigger[7].classList.contains('active')) {
                groupElementBody08.classList.add('active')
            } else {
                groupElementBody08.classList.remove('active')
            }

            if(groupTrigger[8].classList.contains('active')) {
                groupElementBody09.classList.add('active')
            } else {
                groupElementBody09.classList.remove('active')
            }

            if(groupTrigger[9].classList.contains('active')) {
                groupElementBody010.classList.add('active')
            } else {
                groupElementBody010.classList.remove('active')
            }

        })
        }