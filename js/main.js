/****************** PROJECT MENU ******************/
const allProjects = document.getElementsByClassName("project");
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
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    })
});

/****************** INTERSECTION OBSERVER ******************/
const options = {
    threshold: 0
};

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('slide-in');
        }
    });
}, options);

let aboutText = document.querySelector(".about-text");
observer.observe(aboutText);

let aboutImage = document.querySelector(".about-img");
observer.observe(aboutImage);

let educationSection = document.querySelectorAll("#education > div");
educationSection.forEach(section => {
    observer.observe(section);
});

let workExpParagraph = document.querySelector("#work-exp p");
observer.observe(workExpParagraph);

let workExpSVG = document.querySelector("#work-exp .work-exp-img");
observer.observe(workExpSVG);

let workExpCompanies = document.querySelectorAll(".company");
workExpCompanies.forEach(section => {
    observer.observe(section);
});

let skillsSection = document.querySelector(".skills-grid");
observer.observe(skillsSection);

let projects = document.querySelectorAll(".project");
projects.forEach(section => {
    observer.observe(section);
});
