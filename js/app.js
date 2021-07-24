// by using the DOMContentLoaded event to wait until the construction of the DOM is finished.

document.addEventListener("DOMContentLoaded",()=>{

// Define Global Variables
 
let startTime = performance.now();

// fetched data of an api or generated at server side.
let fetchedData = [
    {
        name:"sec1",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.

        Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
    },
    {
        name:"sec2",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.

        Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
    },
    {
        name:"sec3",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.

        Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
    },
    {
        name:"sec4",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.

        Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
    },
    {
        name:"sec5",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.

        Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
    },
    {
        name:"sec6",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.

        Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
    },
    {
        name:"sec7",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.

        Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
    }
];

// navFragment will be the container of the list item generated
const navFragment = document.createDocumentFragment();
// sectionFragment will be the container of sections generated that contain the data
const sectionFragment = document.createDocumentFragment();
// navbarList is the unordered list that contain list items that contains the links to the sections
const navbarList = document.getElementById("navbar__list");
// mainElement is the main element that contain the sections.
const mainElement = document.getElementsByTagName("main")[0];
// rest of menu is the sliding menu that contain the mobile list or the rest sections links if there were more than 5 data elements 
const restOfMenu = document.createElement("ul");
// menuIcon is the icon at the navbar that by clicking on , the listener will be called which slide the restOfMenu list
const menuIcon = document.createElement("div");
// toTopBottom is the button that navigate us to the top of the page
const toTopButton = document.createElement("div");
// toBottomBottom is the button that navigate us to the bottom of the page
const toBottomButton = document.createElement("div");
// topBottomButtons is the fragment that will contain the buttons
const topBottomButtons = document.createDocumentFragment();
// pageHeader is the header of the page 
const pageHeader = navbarList.parentElement.parentElement;
// top offsets of the sections 
const sectionsOffsets = [];


// End Global Variables
//Start Helper Functions
 


// slideRestMenu slide the mobile list menu
function slideRestMenu(e){
    this.classList.toggle("rotate__menu");
    restOfMenu.classList.toggle("slide");
};

// fading element out function __javascrip on doesn't work return opacity 0.1__  ???? think
const fadeOut = (element)=>{
    element.classList.remove("fade-in");
};

// fading element in function __the same as javascript version of fadeIn __ 
const fadeIn = (element)=>{
    element.classList.add("fade-in");
};

// scrollToSection , listener of the list item click event , that navigate us to the section that its id is the same as the href attribute
const scrollToSection = (e)=>{
    // preventing the default action of the anchor element that will refresh the page and ad #
    e.preventDefault();
    if(e.target.nodeName == "LI"){
        const anchor = e.target.children[0];
        const targetElement = document.getElementById(e.target.children[0].getAttribute("href"));
        targetElement.scrollIntoView({behavior:'smooth'});
        targetElement.classList.add("active-section");
        document.getElementsByClassName("active-li")[0].classList.remove("active-li");
        e.target.classList.add("active-li");
    }
};


const sections = document.getElementsByTagName("section");


// isInview function return boolean that determin if the element is relativly appear to the user
const isInView = (element)=>{
    const {top,bottom} = element.getBoundingClientRect();
    if((top < window.innerHeight/2) && bottom > (window.innerHeight)/2){
        return true;
    }
    return false;
};


// function that add the specified class and remove it from all other siblings
const addClassRemoveSiblings = (element,myClass)=>{
    if(!element.classList.contains(myClass)){
        for(const el of restOfMenu.children){
            el.classList.remove(myClass);
        }
        for(const el of navbarList.children){
            el.classList.remove(myClass);
        }
        element.classList.add(myClass);
    }
};


// scroll function contains serveral funcionlities that are applied on scrolling
const scrollFunction = (e)=>{
    // timer refreshed every time we scroll
    let timer = 3500;
    //sliding the navbar after 3.5 seconds
    pageHeader.classList.add("slide__header");
    setTimeout(()=>{
        pageHeader.classList.remove("slide__header");
    },timer);

    // determine which button shall be visible the top or the bottom or both
    if(!toTopButton.classList.contains("fade-in") && window.scrollY > sections[0].offsetTop){
        fadeIn(toTopButton);

    }else if(toTopButton.classList.contains("fade-in") && window.scrollY < sections[0].offsetTop){
        fadeOut(toTopButton);
    }
    if(!toBottomButton.classList.contains("fade-in") && window.scrollY < sections[sections.length-1].offsetTop){
        fadeIn(toBottomButton);
    }else if(toBottomButton.classList.contains("fade-in") && window.scrollY > sections[sections.length-1].offsetTop){
        fadeOut(toBottomButton);
    }

    // adding the active-section class for the section viewed
    for(const section of sections){
        if(isInView(section)){
            if(!section.classList.contains("active-section")){
                section.classList.add("active-section");
                const activeList = document.getElementById(section.dataset.nav);
                addClassRemoveSiblings(activeList,"active-li");
            }
        }else{
            if(section.classList.contains("active-section")){
                section.classList.remove("active-section");    
            }
        }
    }

};

// scroll to top function , handler of the click event of toTopButton
const scrollToTop = ()=>{
    window.scrollTo(0,0);
};

// scroll to bottom funcion , handler of the click event of toBottomButton
const scrollToBottom = ()=>{
    window.scrollTo(0,document.body.offsetHeight);
};


// End Helper Functions
// Begin Main Functions 



// dynamic building of the page

for(const [index,data] of fetchedData.entries()){
    const newListItem = document.createElement("li");
    const anchrLink = document.createElement("a");
    const newSection = document.createElement("section");
    const dvLndCntnr = document.createElement("div")
    const title = document.createElement("h2");
    const content = document.createElement("p");

    newListItem.textContent = data.name;
    newListItem.setAttribute("id",data.name);
    if(index < 4)
        navFragment.appendChild(newListItem);
    

    content.textContent = data.content;

    title.textContent = data.name;

    dvLndCntnr.classList.add("landing__container");
    dvLndCntnr.appendChild(title);
    dvLndCntnr.appendChild(content);

    newSection.setAttribute("id",`section${index+1}`);
    newSection.setAttribute("data-nav", data.name);
    newSection.appendChild(dvLndCntnr);

    anchrLink.setAttribute("href",newSection.getAttribute("id"));
    newListItem.appendChild(anchrLink);
    restOfMenu.appendChild(newListItem.cloneNode(true));
    if(index == 0){
        newSection.classList.add("active-section");
        newListItem.classList.add("active-li");
    }
    
    sectionFragment.appendChild(newSection);
}


menuIcon.classList.add("list__menu");
for(let i=0;i<4;i++){
    menuIcon.appendChild(document.createElement("span"));
}

restOfMenu.classList.add("mobile__list");
navbarList.parentElement.parentElement.appendChild(restOfMenu);

navbarList.appendChild(navFragment);
navbarList.parentElement.appendChild(menuIcon);
mainElement.appendChild(sectionFragment);

// start the nav bar to be visible

pageHeader.classList.add("slide__header");

// hiding menuIcon if there are less that 5 items 
if(fetchedData.length < 5){
    menuIcon.classList.add("hide");
}else{
    // hiding the first 5 items in the restOfItem menu
    for(let i=0;i<4;i++){
        restOfMenu.children[i].classList.add("hide");
    }
}

// starting appeding the elements to their parents 

toBottomButton.appendChild(document.createElement("div"));
toBottomButton.classList.add("scroll__bottom");
toTopButton.appendChild(document.createElement("div"));
toTopButton.classList.add("scroll__top");
topBottomButtons.appendChild(toTopButton);
topBottomButtons.appendChild(toBottomButton);
document.body.appendChild(topBottomButtons);



// * End Constructing Functions
// * Begin Events 


// determine which button shall be visible depending on the viewport 

if(window.scrollY > sections[0].offsetTop){
    fadeIn(toTopButton);
}else{
    fadeOut(toTopButton)
}

if(window.scrollY < sections[sections.length-1].offsetTop){
    fadeIn(toBottomButton);
}else{
    fadeOut(toBottomButton);
}


navbarList.addEventListener("click",scrollToSection); // listengin for click event , to scroll to the specified section
restOfMenu.addEventListener("click",scrollToSection); // lstenging for click event on the slider menu list items
menuIcon.addEventListener("click", slideRestMenu); // click event for the menu icon , to toggle sliding the menu
toBottomButton.addEventListener("click", scrollToBottom); // click event for the bottom button
toTopButton.addEventListener("click",scrollToTop); // click event for the top button
window.addEventListener("scroll", scrollFunction); // scroll event , activate scrollFunction event handler 

let endTime = performance.now();
console.log("it take %f to work is",endTime-startTime);


},{once:true}); // to remove the event after constructing of the document tree



//custom functions
// fadeIn 
    //     element.style.opacity = 1;
    // const myInterval = setInterval(()=>{
    //     if(element.style.opacity > 0){
    //         element.style.opacity -= 0.1;
    //     }else{
    //         element.style.display = "none";
    //         clearInterval(myInterval);
    //     }
    // },100);
//fadeOut
    //     element.style.display = "block";
    //     element.style.opacity = 0;
    // const intervalId = setInterval(()=>{
    //     if(element.style.opacity < 1){
    //         element.style.opacity += 0.1;
    //     }else{
    //         element.style.opacity = 1;
    //         clearInterval(intervalId);
    //     }
    // },100);