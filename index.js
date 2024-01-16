var typed = new Typed('#element', {
    strings: ['Software Engineer', 'Full Stack Developer'],
    typeSpeed: 50,
  });

  window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Sample skills data
const skillsData = [
  { name: 'HTML', image: 'images/html.png' },
  { name: 'CSS', image: 'images/css.png' },
  { name: 'JavaScript', image: 'images/javascript.png' },
  // Add more skills as needed
];

// Function to create and append a skill element to the skills section
function createSkillElement(skill) {
  const skillsSection = document.getElementById('skills');

  const skillElement = document.createElement('div');
  skillElement.classList.add('skill');

  const imgElement = document.createElement('img');
  imgElement.src = skill.image;
  imgElement.alt = skill.name;

  const pElement = document.createElement('p');
  pElement.textContent = skill.name;

  skillElement.appendChild(imgElement);
  skillElement.appendChild(pElement);

  skillsSection.appendChild(skillElement);
}

// Dynamically add skills to the skills section
window.addEventListener('load', function () {
  skillsData.forEach(createSkillElement);
});




// Sample projects data
const projectsData = [
  {
      title: 'Project 1',
      description: 'Best Buy is a multinational retailer specializing in consumer electronics, appliances, and entertainment products.',
      image: 'project1.jpg',
      link: 'https://github.com/6394981696/BEST_BUY-CLONE'
  },
  {
      title: 'Project 2',
      description: 'Best Buy Project is an electronic website. In this website, electronics products are added.',
      image: 'project2.jpg',
      link: 'https://github.com/6394981696/FavCart'
  },
  // Add more projects as needed
];

// Function to create and append a project element to the projects section
function createProjectElement(project) {
  const projectsSection = document.getElementById('projects');

  const projectElement = document.createElement('div');
  projectElement.classList.add('project');

  const imgElement = document.createElement('img');
  imgElement.src = project.image;
  imgElement.alt = project.title;

  const titleElement = document.createElement('h3');
  titleElement.textContent = project.title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = project.description;

  const linkElement = document.createElement('a');
  linkElement.href = project.link;
  linkElement.textContent = 'View Project';

  projectElement.appendChild(imgElement);
  projectElement.appendChild(titleElement);
  projectElement.appendChild(descriptionElement);
  projectElement.appendChild(linkElement);

  projectsSection.appendChild(projectElement);
}

// Dynamically add projects to the projects section
window.addEventListener('load', function () {
  projectsData.forEach(createProjectElement);
});

