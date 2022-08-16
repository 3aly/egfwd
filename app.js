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



const sections= document.querySelectorAll('section'); //get all the sections
const navBarList=document.getElementById('navbar__list'); //get the navbar list


buildNav(); //build the navbar


const navs=document.querySelectorAll('ul li'); //get all the li elements in the navbar after its built
const navLinks=document.querySelectorAll('ul li a'); //get all links in navbar

navHighlighter();
scrollToSection();


//**************main functions**************// 


function buildNav(){
    sections.forEach(section=>{

        const newList = document.createElement('li'); //create a new li element
        newList.className=section.getAttribute('id')+' nav-item'; //set the class of the new li element to the id of the section
        const newLink = document.createElement('a'); //create a new link element
        newLink.className='nav-link'; //set the class of the new link element to nav-link
        newLink.setAttribute('href', '#'+section.getAttribute('id')); //set the href of the new link element to the id of the section
        
        newLink.textContent=section.getAttribute('id'); //set the text content of the new link element to the id of the section
        newList.appendChild(newLink); //append the new link element to the new li element
        navBarList.appendChild(newList); //append the new li element to the navbar list
        
    });

    return navBarList; //return the navbar list
}



function scrollToSection(){


    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // prevent default behaviour of the link
            const target=e.target.getAttribute('href'); // get the href of the link
            const targetSection=document.querySelector(target); // get the section that the link points to
            targetSection.scrollIntoView({behavior:'smooth'}); // scroll to the section
        }
        )
     
    
    
    });
    

}



function navHighlighter(){


    
    window.addEventListener('scroll',()=> {
    
        let current="";
      
      
        
          for(let section of sections){
      
              const secttionTop = section.offsetTop; //calculate the offset form each section to the top of the window
              const sectionHeight=section.clientHeight; //calculate the height of each section
              if(pageYOffset>secttionTop-sectionHeight/2){
                current=section.getAttribute('id'); //get the id of the current section
            }
              if(pageYOffset===0){
                  current='Home'; //get the id of the current section
              }
            
          }
          console.log(current);
          navs.forEach(li=>{ //loop through all the li elements in the navbar
      
          li.classList.remove('active'); //remove the active class from all the li elements
        
          if(li.classList.contains(current)){ //if the li element contains the current section
            
            li.classList.add('active'); //add the active class to the current li element
          
      
          }
      
          })
      
       
      })
      
    
    }

//**************main functions**************// 