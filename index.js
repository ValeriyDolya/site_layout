const MOBILE_SHOW = 'nav-mobile-menu-container--show'

let mobileMenuButtonOpen = document.getElementById('mobile-menu-button-open');

let mobileMenuContainer = document.getElementById('mobile-menu-container');

mobileMenuButtonOpen.addEventListener('click', function() {
    console.log('open')
    mobileMenuContainer.classList.remove(MOBILE_SHOW);
})

let mobileMenuButtonClose = document.getElementById('mobile-menu-button-close')

mobileMenuButtonClose.addEventListener('click', function() {
    console.log('close')
    mobileMenuContainer.classList.add(MOBILE_SHOW);
})




const ACTIVE_CLASS = 'active-some';

let aboutLinksList = document
    .getElementById('about-links')
    .getElementsByTagName('div');

aboutLinksList = Array.from(aboutLinksList);

console.log(aboutLinksList);

let descriptions = document
    .getElementById('about-descriptions')
    .getElementsByTagName('div');

descriptions = Array.from(descriptions);

aboutLinksList.forEach(function(element) {
    element.addEventListener('click', toggle)
})

function toggle(event) {
    let aboutLink = event.target;

    let aboutLinkIndex = parseInt(event.target.dataset.index);
    
    aboutLink.classList.add(ACTIVE_CLASS)

    let otherAboutLinks = aboutLinksList.filter(function(otherLink) {
         let otherLinkIndex = parseInt(otherLink.dataset.index);

         return otherLinkIndex !== aboutLinkIndex;
    })

    otherAboutLinks.forEach(function(el) {
        el.classList.remove(ACTIVE_CLASS)
    })

    let currentDescription = descriptions.find(function(el) {
        let currentDescriptionIndex = parseInt(el.dataset.index);

        return currentDescriptionIndex === aboutLinkIndex;
    })
    
    currentDescription.classList.add(ACTIVE_CLASS)

    let otherDescriptions = descriptions.filter(function(otherLink) {
        let otherLinkIndex = parseInt(otherLink.dataset.index);

        return otherLinkIndex !== aboutLinkIndex;
   })

   otherDescriptions.forEach(function(el) {
       el.classList.remove(ACTIVE_CLASS)
   })
}

aboutLinksList[0].classList.add(ACTIVE_CLASS)
descriptions[0].classList.add(ACTIVE_CLASS)