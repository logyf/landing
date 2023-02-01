/**
 * Define Global Variables
 * 
*/
// too reduce reflow and rebuild

let allsection=document.querySelectorAll('section'); 
let ul =document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
const links = document.querySelectorAll("a");
// end


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


 
// Navigation is built dynamically as an unordered list



  allsection.forEach(function section(section){ 
   
     let li = document.createElement('li');
     
   
      let name=section.getAttribute('data-nav'); 
      let id=section.getAttribute('id'); 
    
      li.innerHTML= `<a  class="menu__link id= "#${id}">${name}</a>`;   


      fragment.appendChild(li);
      ul.appendChild(li); 
// When clicking an item from the navigation menu, the link should scroll to the appropriate section.
       li.addEventListener("click", function(event){
        event.preventDefault();
        section.scrollIntoView({behavior: "smooth",})
        
      })
    })
    
    

// creat and add active class to nav and section
// https://nfpdiscussions.udacity.com/t/navbar/496483/5

// vars
const isInViewPort = elm => elm.getBoundingClientRect().top > 0 && elm.getBoundingClientRect().top < 150;
const isContainClass = (elm, className) => elm.classList.contains(className);
const isActiveLink = (link, section) => section.dataset.nav === link.textContent;



window.addEventListener("scoll", evt =>{
  allsection.forEach(section =>{
    
   if(isInViewPort(section)){
      if(isContainClass(section, "your-active-class")){
            section.classList.remove("your-active-class");
      }else{
           section.classList.add("your-active-class")
      }
    links.forEach(link =>{
            if(isActiveLink(link, section)){
                link.classList.add("active-link")
         }else{
           link.classList.remove("active-link")
         }
     })
   }else{
         section.classList.remove("your-active-class");
   }
})})