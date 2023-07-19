//navbarHeading.classList.add('navbarHeading');
const navbarHeading = document.createElement('div');

function scrollFunction() {
  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".logo");
  const subHeading = document.getElementById("subheading");
  const menu = document.querySelector(".menu");

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.style.padding = "5px";
    navbar.style.opacity = "0.95";
    logo.style.fontSize = "35px";
    navbarHeading.textContent = subHeading.textContent;

    navbar.appendChild(logo);
    navbar.appendChild(navbarHeading);
    navbar.appendChild(menu);

    const children = navbar.children;
    navbar.appendChild(children[1]);//logo
    navbar.appendChild(children[2]);//heading
    navbar.appendChild(children[0]);//menu

  } else {

    navbar.style.padding = "10px";
    navbar.style.opacity = "1";
    logo.style.fontSize = "55px";
    navbarHeading.remove();
  }
  
  if (!navbarHeading) {
    navbarHeading = document.createElement('div');
    navbarHeading.classList.add('navbarHeading');
    navbarHeading.textContent = subHeading.textContent;
    localStorage.setItem('navbarHeading', JSON.stringify(navbarHeading));
  }
}

window.addEventListener('scroll', scrollFunction);
const throttle = (callback, delay) => {
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

//const throttledScroll = throttle(scrollFunction, 100);
window.addEventListener('scroll', scrollFunction);

//Navbar Heading styling
navbarHeading.style.fontSize = '19px';
navbarHeading.style.fontFamily = 'georgia, sans-serif';
navbarHeading.style.alignSelf = 'center';
navbarHeading.style.letterSpacing = 'letter-spacing: 0.5vw';
navbarHeading.style.margin = '20px';


/*if(!navbar.contains(navbarHeading)) {
  navbar.appendChild(navbarHeading);
};

//navbarHeading.textContent = document.getElementById("subheading");
//navbarHeading.remove();
//subHeading.remove();

  if (subHeading) {
    navbarHeading.textContent = subHeading.textContent;
  } else {
    navbarHeading.remove();
  }*/