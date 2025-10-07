
//STAGE ONE -------- intersection section------------------------
const loadingContainer = document.getElementById("loadingContainer");
// window.addEventListener("load", () =>{
//     loadingContainer.style.display = "none";
//     showScroll();
// });

// function hideScroll(){
//   document.body.style.overflow = "hidden";
// };
// hideScroll();
// function showScroll(){
//   document.body.style.overflow = "visible";
// };

//STAGE Two -------- intersection section------------------------
window.addEventListener("DOMContentLoaded", setup);

function setup(){
    const options = {
        rootMarging: '0px 0px -200px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add("show-element");
                observer.unobserve(entry.target);
            }
            else{
                return;
            }
        })
    }, options);

    const allColumTwo = document.querySelectorAll(".col-2");
    allColumTwo.forEach(colTwo =>{
        observer.observe(colTwo)
    });

    const allH1 = document.querySelectorAll("h1");
    allH1.forEach(h1 =>{
        observer.observe(h1)
    }); 

    const allH2 = document.querySelectorAll("h2");
    allH2.forEach(h2 =>{
        observer.observe(h2)
    });

    const allH3 = document.querySelectorAll("h3");
    allH3.forEach(h3 =>{
        observer.observe(h3)
    });

    const allH4 = document.querySelectorAll("h4");
    allH4.forEach(h4 =>{
        observer.observe(h4)
    });

    const allP = document.querySelectorAll("p");
    allP.forEach(p =>{
        observer.observe(p)
    });

    const socialLink = document.querySelector(".social-link");
        observer.observe(socialLink)

    const address = document.querySelector(".address");
        observer.observe(address)
}

//STAGE TWO -------- homepage section------------------------
const homepageDetails = [
    {
        imgSrc:"image/image\\ 1.png",
        h2: "Resonating Life Mansion 1",
        linerGgradient: "rgba(0,0,0,0.5)",
        href: "project.html"
    },
    {
        imgSrc: "image/image\\ 26.jpg",
        h2: "Resonating Life Mansion 2",
        linerGgradient: "rgba(0,0,0,0.5)",
        href: "project.html"
    },
    {
        imgSrc: "image/image\\ 15.png",
        h2: "Resonating Life Mansion 3",
        linerGgradient: "rgba(0,0,0,0.5)",
        href: "project.html"
    },
    {
        imgSrc: "image/image\\ 12.png",
        h2: "Resonating Life Mansion 4",
        linerGgradient: "rgba(0,0,0,0.5)",
        href: "project.html"
    },
    {
        imgSrc: "image/image\\ 11.png",
        h2: "Resonating Life Mansion 5",
        linerGgradient: "rgba(0,0,0,0.5)",
        href: "project.html"
    }
];

const homePage = document.querySelector(".home-page");
const h2El = document.querySelector(".home-page h1");
const hrefEl = document.querySelector(".home-page a");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const firstNumber = document.getElementById("firstNumber");
const loadingMotion = document.getElementById("loading-motion");
const lastNumber = document.getElementById("lastNumber");
let index = 0;
let intervalId; // To store the interval ID

// Function to update the details
function updateDetails() {
    const { imgSrc, h2, linerGgradient, href } = homepageDetails[index];
    const backgroundValue = `linear-gradient(${linerGgradient}, ${linerGgradient}), url(${imgSrc})`;
    homePage.style.backgroundImage = backgroundValue;
    h2El.textContent = h2;
    hrefEl.href = href;

    const percentage = (index  / homepageDetails.length) * 100;
    loadingMotion.style.width = `${percentage}%`;
    lastNumber.textContent = "0" + homepageDetails.length;
    firstNumber.textContent = "0" + (index+1);
}

// Function to go to the next item
function goToNext() {
    index++;
    if (index === homepageDetails.length) {
        index = 0;
    }
    updateDetails();
}

// Function to go to the previous item
function goToPrevious() {
    index--;
    if (index < 0) {
        index = homepageDetails.length - 1;
    }
    updateDetails();
}

// Start the interval
intervalId = setInterval(goToNext, 4000);

// Add event listeners for the buttons
nextBtn.addEventListener("click", () => {
    clearInterval(intervalId); // Stop the interval
    goToNext();
    intervalId = setInterval(goToNext, 4000); // Restart the interval
});

backBtn.addEventListener("click", () => {
    clearInterval(intervalId); // Stop the interval
    goToPrevious();
    intervalId = setInterval(goToNext, 4000); // Restart the interval
});

//STAGE THREE --------------------------------

const images = [
  
    {
        img: "image/image 15.png",
        textOver:"SEE OUR PROJECTS"
    },
    {
        img: "image/image 12.png",
        textOver:"SEE OUR PROJECTS"
    },
    {
        img: "image/image 11.png",
        textOver:"SEE OUR PROJECTS"
    }
];
const infiniteColum = document.querySelector(".infiniteColum");
const infiniteImg = document.querySelector(".infiniteColum img");
let infinteIndex = 0;

updateImages()
function updateImages(){
    const {img, textOver} = images[infinteIndex];
    infiniteImg.src = img
    infinteIndex++

    if(infinteIndex < 100){
        setTimeout(() =>{
            updateImages()
        },200)
    }
    if(infinteIndex === images.length){
        infinteIndex = 0;
    }
};

//STAGE FOUR ----------project-animination----------------------
const animinationImagesContainer = document.querySelector(".animinationImagesContainer");
const projectAniminationContainer = document.getElementById("projectAniminationContainer");

function animinationVisible(){
    animinationImagesContainer.classList.add("visible");
};

function animinationHidden(){
    animinationImagesContainer.classList.remove("visible");
};

projectAniminationContainer.addEventListener("mouseover", ()=>{
    animinationVisible()
});

projectAniminationContainer.addEventListener("mouseleave", () =>{
    animinationHidden()
})


//STAGE FIVE ----------contact form popup----------------------
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const popupContainer = document.getElementById("mainContactFormPopUp");

openPopup.onclick = function(){
    popupContainer.classList.add("show");
    openPopup.style.display = "none"
};

closePopup.onclick = function(){
    popupContainer.classList.remove("show");
    openPopup.style.display = "block"
}

//FOR------------------- animination popup--------------------------
const openPopupForAnimination = document.getElementById("openPopupForAnimination");
const closePopupForAnimination = document.getElementById("closePopupForAnimination");
const popupContainerForAnimination = document.querySelector(".form-popupForAnimination");

openPopupForAnimination.onclick = function(){
    popupContainerForAnimination.classList.add("show");
    openPopupForAnimination.style.display = "none"
};

closePopupForAnimination.onclick = function(){
    popupContainerForAnimination.classList.remove("show");
    openPopupForAnimination.style.display = "block"
}
//FOR------------------- MobileNavbar popup--------------------------
const openPopupForMobileNavbar = document.getElementById("openPopupForMobileNavbar");
const closePopupForMobileNavbar = document.getElementById("closePopupForMobileNavbar");
const popupContainerForMobileNavbar = document.querySelector(".form-popupForMobileNavbar");

openPopupForMobileNavbar.onclick = function(){
    popupContainerForMobileNavbar.classList.add("show");
    openPopupForMobileNavbar.style.display = "none"
};

closePopupForMobileNavbar.onclick = function(){
    popupContainerForMobileNavbar.classList.remove("show");
    openPopupForMobileNavbar.style.display = "block"
}

//STAGE SIX------------mobile menubar section-------------------
const navbarShowContainer = document.getElementById("navbarShowContainer");
const menuBarContainer = document.getElementById("menuBarContainer");
const menuBarTop = document.getElementById("menuBarTop");
const menuBarBottom = document.getElementById("menuBarBottom");
const htmlBody = document.querySelector("body");

menuBarContainer.onclick = function(){
    menuBarTop.classList.toggle("for-menuBarTop");
    menuBarBottom.classList.toggle("for-menuBarBottom");
    if(menuBarTop.classList.contains("for-menuBarTop")){
        navbarShowContainer.style.visibility = "visible";
        htmlBody.classList.add("overflowHidden");
    }
    else{
        navbarShowContainer.style.visibility = "hidden";
        htmlBody.classList.remove("overflowHidden");
    };
};
