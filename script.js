const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const tab1 = document.getElementById('nl-1');
const tab2 = document.getElementById('nl-2');
const tab3 = document.getElementById('nl-3');
const tab4 = document.getElementById('nl-4');


function callTab() {

    // if tab1 is clicked on desktop, show only the content associated with btn1, collapse the rest of them
    if (tab1.addEventListener('click', function() {
        btn2.classList.add('collapsed');
        btn3.classList.add('collapsed');
        btn4.classList.add('collapsed');
        btn1.classList.remove('collapsed');
        btn1.addEventListener('click', function() {
            btn1.classList.toggle('collapsed');
        });
    }));

    // if tab2 is clicked on desktop, show only the content associated with btn2, collapse the rest of them
    if (tab2.addEventListener('click', function() {
        btn1.classList.add('collapsed');
        btn3.classList.add('collapsed');
        btn4.classList.add('collapsed');
        btn2.classList.remove('collapsed');
        btn2.addEventListener('click', function() {
            btn2.classList.toggle('collapsed');
        });
    }));

    // if tab3 is clicked on desktop, show only the content associated with btn3, collapse the rest of them
    if (tab3.addEventListener('click', function() {
        btn1.classList.add('collapsed');
        btn2.classList.add('collapsed');
        btn4.classList.add('collapsed');
        btn3.classList.remove('collapsed');
        btn3.addEventListener('click', function() {
            btn3.classList.toggle('collapsed');
        });
    }));

    // if tab4 is clicked on desktop, show only the content associated with btn4, collapse the rest of them
    if (tab4.addEventListener('click', function() {
        btn1.classList.add('collapsed');
        btn2.classList.add('collapsed');
        btn3.classList.add('collapsed');
        btn4.classList.remove('collapsed');
        btn4.addEventListener('click', function() {
            btn4.classList.toggle('collapsed');
        });
    }));
};


function viewportSize(screenWidth) {
    if (screenWidth.matches) {
        // so that same tab is visible in accordion
        document.querySelectorAll('.nav-link').addEventListener('click', callTab());
    }
}

var screenWidth = window.matchMedia("(min-width: 992px)")
viewportSize(screenWidth) // Call listener function at run time
screenWidth.addEventListener('change', viewportSize) // Attach event listener function on state changes
