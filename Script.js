//    function _readProperty(sel, p) {
//   const el = document.querySelector(sel);
//   if (p === 'w') return el.clientWidth;
//   if (p === 'h') return el.clientHeight;
//   return +el.style[p].replace('px', '');
// }
// function _assignProperty(sel, prop, val, important = false) {
//   const el = document.querySelector(sel);
//   el.style.setProperty(prop, val, important ? 'important' : '');
// }

// function _readElement(el, p) {
//   if (p === 'w') return el.clientWidth;
//   if (p === 'h') return el.clientHeight;
//   return +el.style[p].replace('px', '');
// }

// function _assignElement(el, prop, val, important = false) {
//   el.style.setProperty(prop, val, important ? 'important' : '');
// }
// function _assignAllProperty(className, prop, val, important = false) {
//   const els = document.getElementsByClassName(className);
//   for (let i = 0; i < els.length; i++) {
//     els[i].style.setProperty(prop, val, important ? 'important' : '');
//   }
// }
// function putStyle(element , prop , value , important = false) {
   
// if (_readElement(element , prop) != value) {
//     _assignElement(element , prop , value + 'px')
// }
// }
const pageHeading = document.getElementById("page-heading");
const pageHeading__I = pageHeading.querySelector("i");
const pageHeading__H1 = pageHeading.querySelector("h1");
let page = document.getElementById("page")
function styles() {

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
if (Number(page.style.height.replace("px" , "")) != windowHeight) {
    page.style.height = windowHeight + 'px';
}
    

            if (windowWidth >= 769) {
     let navAccount = document.querySelector(".sidebar .nav-account");
     if (navAccount) {
       let nav = document.getElementById("nav");
       let navbarNavAccount = nav.getElementsByClassName("nav-account")[0];
       if (!navbarNavAccount) {
         let clone = navAccount.cloneNode(true);
         nav.appendChild(clone)
         navAccount.remove();
       }
     }
        
    }
    else {
     let navAccount = document.querySelector(".nav .nav-account");
     if (navAccount) {
       let sidebar = document.getElementById("sidebar");
       let sidebarNavAccount = sidebar.getElementsByClassName("nav-account")[0];
       if (!sidebarNavAccount) {
         let clone = navAccount.cloneNode(true);
         sidebar.prepend(clone)
         navAccount.remove();
        }
      }
const pw = pageHeading.clientWidth;
  const ph = pageHeading.clientHeight;

  

  const fontSizeI = (pw + ph) / 18;
  

  
  const currentI = pageHeading__I.style.fontSize;

  
  const targetI = fontSizeI + 'px';

 
  if (currentI !== targetI) pageHeading__I.style.fontSize = targetI;

    }
    
 
    requestAnimationFrame(styles)
  }
  styles()

