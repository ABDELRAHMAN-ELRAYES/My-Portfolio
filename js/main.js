'use strict';

// make the tracking cursor sign
let all = document.querySelectorAll('.increase_cursor');
let cursorSign = document.getElementById('cursor_sign');
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

function movecursorSign(e) {
  cursorSign.style.top = `${e.clientY}px`;
  cursorSign.style.left = `${e.clientX}px`;
}

document.addEventListener('mousemove', movecursorSign);
// make the cursor sign hidden when hover on logo or icon
let icons = document.querySelectorAll('.icon');
let logo = document.querySelector('.logo');
let navLinks = document.querySelectorAll('.nav_link');
[...icons, logo, ...navLinks].forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursorSign.style.zIndex = '-1';
  });
  element.addEventListener('mouseleave', () => {
    cursorSign.style.zIndex = '500';
  });
});
// make the nav bar
let nav = document.querySelector('nav');
nav.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target);
  if (e.target.closest('.nav_link')) {
    navLinks.forEach(element => {
      element.classList.remove('current_link');
    });
    e.target.closest('.nav_link').classList.add('current_link');
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
