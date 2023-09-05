let navbarHeading = document.createElement('div');
const navbarHeadingText = document.createElement('span');
const navbarContent = document.querySelector('.navbar-content');
const subHeading = document.querySelector('subheading');

navbarHeading.appendChild(navbarHeadingText);
navbarHeading.classList.add('navbarHeading');

// Navbar Heading Styling
navbarHeading.style.fontSize = '19px';
navbarHeading.style.fontFamily = 'georgia, sans-serif';
navbarHeading.style.alignSelf = 'center';
navbarHeading.style.letterSpacing = '0.5vw';
navbarHeading.style.margin = '20px';
navbarHeading.style.textAlign = 'center';

const debounce = (callback, delay) => {
  let pending = false;
  return () => {
    if(!pending) {
      callback();
      pending = true;
      setTimeout(() => {
        pending = false;
      }, delay);
    }
  }
}

window.addEventListener('scroll', debounce(scrollFunction, 200));

function scrollFunction() {
  const navbar = document.querySelector('.navbar');
  const logo = document.querySelector('.logo');
  const subHeading = document.getElementById('subheading');
  const menu = document.querySelector('.menu');

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

    const children = navbar.children;

    navbarHeading.style.display = 'block';

    // Navbar Styling On Scroll Down
    navbar.style.padding = '5px';
    navbar.style.opacity = '.95';
    menu.style.color = '#9E0B81';
    logo.style.fontSize = '35px';

    // Navbar Functioning
    navbarHeading.textContent = subHeading.textContent;

    if (!navbar.contains(menu)) {
      navbar.appendChild(menu);
    }

    navbar.appendChild(logo);
    navbar.appendChild(navbarHeading);
    navbar.appendChild(children[1]);//logo
    navbar.appendChild(children[0]);//heading
    navbar.appendChild(children[2]);//menu
  } else {
    navbar.style.padding = '10px';
    navbar.style.opacity = '1';
    logo.style.fontSize = '55px';
    menu.style.color = '#000000';

    navbarHeading.style.display = 'none';

    if (!navbar.contains(menu)) {
      navbar.appendChild(menu);
    }
  }
}




//scrollFunction();

/*if (!navbar.contains(navbarHeading)) {
      navbar.appendChild(navbarHeading);//heading
      navbar.insertBefore(navbarHeading, menu);
    }*/

    /*if (!navbar.contains(navbarHeading)) {
      navbar.insertBefore(menu);
    }*/

    /*if (!navbar.contains(logo)) {
    }*/
    
    //navbar.appendChild(logo);
    //navbar.appendChild(children[1]);//logo
    //navbar.appendChild(children[0]);//heading
    //navbar.appendChild(children[2]);//menu;

   //navbar.insertBefore(navbarHeading, menu);
   //navbar.appendChild(children[0]);
