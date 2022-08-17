//get all the sections
const sections= document.querySelectorAll('section'); 

//get the navbar list
const navBarList=document.getElementById('navbar__list');

//build the navbar

buildNav();

//get all the li elements in the navbar after its built and all links in navbar

const navs=document.querySelectorAll('ul li'); 
const navLinks=document.querySelectorAll('ul li a');

//deploy the functions

navHighlighter();
scrollToSection();


//**************main functions**************// 


//it loops though all the sections of the page and create a corresponding nav item for each section 

function buildNav(){
    sections.forEach(section=>{

        //create a new li element
        const newList = document.createElement('li'); 

        //set the class of the new li element to the id of the section
        newList.className=section.getAttribute('id')+' nav-item';

        //create a new link element
        const newLink = document.createElement('a'); 

        //set the class of the new link element to nav-link
        newLink.className='nav-link'; 
        
        //set the href of the new link element to the id of the section
        newLink.setAttribute('href', '#'+section.getAttribute('id'));

        //set the text content of the new link element to the id of the section
        newLink.textContent=section.getAttribute('id'); 

        //append the new link element to the new li element
        newList.appendChild(newLink); 

         //append the new li element to the navbar list
        navBarList.appendChild(newList);
        
    });
    //return the navbar list
    return navBarList; 
}


//this fucnton is used to get the current section of the page and scroll to it

function scrollToSection(){

    //loop through all the links in the navbar
    navLinks.forEach((link) => { 

         //add an event listener to each link
        link.addEventListener('click', (e) => {

            //prevent the default behaviour of the link 
            e.preventDefault(); 

             //if the link is the home link, scroll to the top of the page
            if(link.getAttribute('href')==='#Home'){ document.documentElement.scrollTop = 0;}
            else {

                // get the href of the link
                const target=e.target.getAttribute('href'); 

                // get the section that the link points to
                const targetSection=document.querySelector(target);
                
                // scroll to the section
                targetSection.scrollIntoView({behavior:'smooth'}); 
            }
        }
        )
     
    
    
    });
    

}



//this function is used to highlight the current section of the page
function navHighlighter(){


    //add an event listener to the window
    window.addEventListener('scroll',()=> {

        //initialize the current section to empty
        let current=""; 
      
      
            //loop through all the sections
            for(let section of sections){ 
                
            //calculate the offset form each section to the top of the window
            const secttionTop = section.offsetTop; 
            
            //if the page is scrolled to the top of the HOME section, set the current section to HOME
            if((sections[0].offsetTop)/2>pageYOffset>0){
                current='Home';
                sections[0].classList.add('active-home')
            } 

            //if the page is scrolled to the top of the section, set the current section to the section
            else if(pageYOffset>=secttionTop-sectionHeight/2    && pageYOffset<secttionTop+sectionHeight){
                sections[0].classList.remove('active-home');

                //get the id of the current section 
                current=section.getAttribute('id'); 
                
        }
                section.classList.remove('active-section');

            
              
            
            
          }
        console.log(current);
          
        //if the current section is not the HOME section, highlight the current section
        if(current!=="Home"){ 

            //add the class of your-active-class to the current section
            document.getElementById(current).classList.add('active-section');

          }
        //loop through all the li elements in the navbar
        navs.forEach(li=>{ 

            //remove the active class from all the li elements
            li.classList.remove('active'); 
           
            //if the li element contains the current section
            if(li.classList.contains(current)){ 
            
                //add the active class to the current li element
                li.classList.add('active');
      
          }
      
          })
      
       
      })
      
    
    }

    

//**************main functions**************// 