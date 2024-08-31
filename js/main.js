'use strict';
let homeTitle = document.querySelector('.hello_word');
document.addEventListener('DOMContentLoaded', () => {
  homeTitle.classList.add('animate_section_title');
});
// make the tracking cursor sign
let all = document.querySelectorAll('.increase_cursor');
let cursorSign = document.getElementById('cursor_sign');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav_link');

const normalizecursorSign = () => {
  cursorSign.style.width = '2rem';
  cursorSign.style.height = '2rem';
};
const increasecursorSign = () => {
  cursorSign.style.width = '10rem';
  cursorSign.style.height = '10rem';
};

all.forEach(element => {
  element.addEventListener('mouseenter', () => {
    increasecursorSign();
  });
  element.addEventListener('mouseleave', () => {
    normalizecursorSign();
  });
});

let cursorPositionX, cursorPositionY;
function movecursorSign(e) {
  cursorPositionX = e.clientX;
  cursorPositionY = e.clientY;
  let windowScrollX = window.scrollX;
  let windowScrollY = window.scrollY;
  cursorSign.style.left = `${cursorPositionX + windowScrollX}px`;
  cursorSign.style.top = `${cursorPositionY + windowScrollY}px`;
}
document.addEventListener('mousemove', movecursorSign);

window.addEventListener('scroll', e => {
  cursorSign.style.left = `${cursorPositionX + window.scrollX}px`;
  cursorSign.style.top = `${cursorPositionY + window.scrollY}px`;

  //make the active nav link according to the current section on scroll and make the title of each section animated
  let currentSection;
  sections.forEach(sec => {
    let sectionTitle = sec.querySelector('.section_title');
    if (pageYOffset >= sec.offsetTop - sec.getBoundingClientRect().height / 2) {
      currentSection = sec;
      sectionTitle.classList.add('animate_section_title');
    } else {
      sectionTitle.classList.remove('animate_section_title');
    }
  });
  // navLinks.forEach(link => {
  //   let activeLink = link.getAttribute('data-section-id');
  //   link.classList.remove('current_link');
  //   if (activeLink === currentSection.getAttribute('id')) {
  //     link.classList.add('current_link');
  //   }
  // });
});
// make the cursor sign hidden when hover on logo or icon
let icons = document.querySelectorAll('.icon');
let logo = document.querySelector('.logo');

// make the cursor sign disappear when enter the toggle btn zone

let toggleBtns = document.querySelectorAll('.toggle_container');
let projectBtns = document.querySelectorAll('.project_visit_btn');

[...icons, logo, ...projectBtns, ...navLinks, ...toggleBtns].forEach(
  element => {
    element.addEventListener('mouseenter', () => {
      cursorSign.style.zIndex = '-1';
    });
    element.addEventListener('mouseleave', () => {
      cursorSign.style.zIndex = '500';
    });
  }
);
// make the nav bar
let nav = document.querySelector('nav');
nav.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.closest('.nav_link')) {
    navLinks.forEach(element => {
      element.classList.remove('current_link');
    });
    e.target.closest('.nav_link').classList.add('current_link');

    const sectionId = e.target.closest('.nav_link').dataset.sectionId;
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});
// set resume and email icons
let emailIcon = document.querySelector('.email_icon');
let resumeIcon = document.querySelector('.resume_icon');
let emailViewer = document.querySelector('.email_viewer');
let resumeViewer = document.querySelector('.resume_viewer');

emailIcon.addEventListener('mouseover', () => {
  emailViewer.style.opacity = '1';
});
resumeIcon.addEventListener('mouseover', () => {
  resumeViewer.style.opacity = '1';
});
emailIcon.addEventListener('mouseout', () => {
  emailViewer.style.opacity = '0';
});
resumeIcon.addEventListener('mouseout', () => {
  resumeViewer.style.opacity = '0';
});
// implement the magnetic feature on icons
let socialMediaIconsContainer = document.querySelector('.social_media_icons');

logo.addEventListener('mousemove', e => {
  let x = e.offsetX,
    y = e.offsetY,
    iconWidth = logo.clientWidth,
    iconHeight = logo.clientHeight,
    iconMoveX = x - iconWidth / 4,
    iconMoveY = y - iconHeight / 4;
  logo.style.transform = `translate(${iconMoveX}px,${iconMoveY}px)`;
});
logo.addEventListener('mouseout', e => {
  logo.style.transform = ``;
});
icons.forEach(icon => {
  icon.addEventListener('mousemove', e => {
    let x = e.offsetX,
      y = e.offsetY,
      iconWidth = icon.clientWidth,
      iconHeight = icon.clientHeight,
      iconMoveX = x - iconWidth / 4,
      iconMoveY = y - iconHeight / 4;

    icon.style.transform = `translate(${iconMoveX}px,${iconMoveY}px)`;
  });
  icon.addEventListener('mouseout', e => {
    icon.style.transform = ``;
  });
});

// to make the section appear when arrive to it


// change the color of the active nav bar link
// let secCallback = function (entries, observer) {
//   let [entry] = entries;
//   if (entry.isIntersecting) {
//     navLinks.forEach(link => {
//       let activeLink = link.getAttribute('data-section-id');
//       link.classList.remove('current_link');
//       if (activeLink === entry.target.getAttribute('id')) {
//         link.classList.add('current_link');
//       } else {
//         link.classList.remove('current_link');
//       }
//     });
//     // observer.unobserve(entry.target);
//   }
// };
// let secOptions = {
//   root: null,
//   threshold: 0.15,
// };
// const secObserver = new IntersectionObserver(secCallback, secOptions);
// sections.forEach(function (section) {
//   secObserver.observe(section);
// });

// to switch between presentationa and stack section
let toggleCheckbox = document.querySelectorAll('.toggle-input');
toggleCheckbox.forEach(btn => {
  btn.addEventListener('change', function () {
    if (btn.closest('.card-body')) {
      let leftSideDiv = btn
        .closest('.card-body')
        .querySelector('.project_viewer');
      let rightSideDiv = btn
        .closest('.card-body')
        .querySelector('.project_info');

      if (this.checked) {
        rightSideDiv.classList.add('animate_project_overview');
        leftSideDiv.classList.add('animate_project_overview');
      } else {
        rightSideDiv.classList.remove('animate_project_overview');
        leftSideDiv.classList.remove('animate_project_overview');
      }
    }
  });
});
// solve the bug of the navbar
sections.forEach(sec => {
  sec.addEventListener('mouseover', event => {
    let targetSection = event.target.closest('.section');
    if (targetSection) {
      let activeLink = document.querySelector(
        `[data-section-id="${targetSection.id}"]`
      );
      console.log(activeLink);
      navLinks.forEach(link => {
        link.classList.remove('current_link');
      });
      activeLink.classList.add('current_link');
    }
  });
});
