/*!/wp-content/themes/spar-fiby/js/custom-header.js*/
document.addEventListener("DOMContentLoaded",function(){const sections=document.querySelectorAll('.sections');console.log(sections);const navLinks=document.querySelectorAll('.elementor-nav-menu .menu-item a');function getVisibleSection(){let maxVisibleHeight=0;let mostVisibleSectionId=null;console.log(mostVisibleSectionId);sections.forEach(section=>{const rect=section.getBoundingClientRect();const visibleHeight=Math.max(0,Math.min(rect.bottom,window.innerHeight)-Math.max(rect.top,0));if(visibleHeight>maxVisibleHeight){maxVisibleHeight=visibleHeight;mostVisibleSectionId=section.getAttribute('id')}
console.log(mostVisibleSectionId)});navLinks.forEach(link=>{link.classList.remove('navbar-active');if(mostVisibleSectionId&&link.getAttribute('href')===`#${mostVisibleSectionId}`){link.classList.add('navbar-active')}})}
window.addEventListener('scroll',getVisibleSection);window.addEventListener('resize',getVisibleSection);getVisibleSection()})
;