const navbarHeading = document.createElement('div');
navbarHeading.classList.add('navbarHeading');

const navbarHeadingText = document.createElement('span');

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
    navbar.appendChild(children[0]);//heading
    navbar.appendChild(children[2]);//menu

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

window.addEventListener('scroll', scrollFunction);

//Navbar Heading styling
navbarHeading.style.fontSize = '19px';
navbarHeading.style.fontFamily = 'georgia, sans-serif';
navbarHeading.style.alignSelf = 'center';
navbarHeading.style.letterSpacing = '0.5vw';
navbarHeading.style.margin = '20px';
navbarHeading.style.textAlign = 'center';

const navbarContent = document.querySelector(".navbar-content");
navbarContent.style.display = "flex";
navbarContent.style.justifyContent = "center";
navbarHeading.appendChild(navbarHeadingText);

if (subHeading) {
  navbarHeading.textContent = subHeading.textContent;
} else {
  navbarHeading.remove();
}

/*navbarHeadingText.style.textAlign = 'center';
navbarHeadingText.style.alignSelf = 'center';*/