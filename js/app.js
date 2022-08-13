/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
function clicknav(event){

    console.log(event.target.textContent);


  }



const sections= document.querySelectorAll('section');
console.log(sections);
const navs=document.querySelectorAll('nav ul li');
console.log(navs);

window.addEventListener('scroll',()=> {

  let current="";


  
    for(let section of sections){

        const secttionTop = section.offsetTop; //calculate the offset form each section to the top of the window
        const sectionHeight=section.clientHeight; //calculate the hieght of each section
        if(pageYOffset>=(secttionTop-sectionHeight)){
            current=section.getAttribute('id');
        }
    }
    console.log(current);
    navs.forEach(li=>{

    li.classList.remove('active');
    console.log(navs);
    if(li.classList.contains('current')){

        li.classList.add("active");
        console.log(navs);
//d

    }

    })

 
})
