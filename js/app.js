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

const sections= document.querySelectorAll('section');
const navs=document.querySelectorAll('nav .container ul li');
const navLinks=document.querySelectorAll('nav .container ul li a');



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

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // prevent default behaviour of the link
        const target=e.target.getAttribute('href'); // get the href of the link
        const targetSection=document.querySelector(target); // get the section that the link points to
        targetSection.scrollIntoView({behavior:'smooth'}); // scroll to the section
    }
    )
 


});

// Set sections as active
window.addEventListener('scroll',()=> {

  let current="";


  
    for(let section of sections){

        const secttionTop = section.offsetTop; //calculate the offset form each section to the top of the window
        const sectionHeight=section.clientHeight; //calculate the height of each section
        if(pageYOffset>secttionTop-sectionHeight/2){
            current=section.getAttribute('id'); //get the id of the current section
        }
    }
    console.log(current);
    navs.forEach(li=>{

    li.classList.remove('active'); //remove the active class from all the li elements
  
    if(li.classList.contains(current)){
      
      li.classList.add('active'); //add the active class to the current li element
    

    }

    })

 
})
