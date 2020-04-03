/****************** NAVIGATION MENU ******************/

const burger = document.querySelector(".hamburger-menu");
const body = document.querySelector("body");
const navLinks = document.querySelector(".nav-links");
const links = navLinks.querySelectorAll("li");
const aLinks = navLinks.querySelectorAll("a");

burger.addEventListener("click", () => {
    changeClass();
});

aLinks.forEach(link => {
    link.addEventListener("click", () => {
        changeClass();
    })
});

function changeClass() {
    body.classList.toggle("prevent-scroll");
    burger.classList.toggle("toggle");
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    })
}

/****************** PROJECTION MENU ******************/

mySelection('all'); // Execute the function and show all columns

// Add active class to the current button (highlight it)
const btnContainer = document.getElementById("myBtnContainer");

document.querySelector(".filter-all").addEventListener("click", () => {
    mySelection('all');
});

document.querySelector(".filter-android").addEventListener("click", () => {
    mySelection('android');
});

document.querySelector(".filter-web").addEventListener("click", () => {
    mySelection('web');
});

document.querySelector(".filter-java").addEventListener("click", () => {
    mySelection('java');
});

document.querySelector(".filter-csharp").addEventListener("click", () => {
    mySelection('csharp');
});


function mySelection(c) {
    const allProjects = document.getElementsByClassName("project");
    if (c === 'all') {
        for (let i = 0; i < allProjects.length; i++) {
            allProjects[i].classList.add('show');
        }
    } else {
        for (let i = 0; i < allProjects.length; i++) {
            let classList = allProjects[i].classList;
            if (classList.contains(c))
                classList.add('show');
            else
                classList.remove('show');
        }
    }
}

const btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active-project");
        current[0].classList.remove("active-project");
        this.classList.add("active-project");
    });
}

/****************** GLIDE ******************/

window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        duration: 2,
        rewind: true,
        arrows :{
            prev: '.glider-prev',
            next: '.glider-next'
        }
    })
});