

let navbuttons={
    Home: document.getElementById('Home'),
    Education: document.getElementById('Education'),
    Skills: document.getElementById('Skills'),  
    Projects: document.getElementById('Projects'),
    Resume: document.getElementById('Resume'),
    Contact: document.getElementById('Contact')
}
 //mainlearning
let conbuttons ={
    Github: document.getElementById('Github'),
    Linkedln: document.getElementById('LinkedIn'),
    Email: document.getElementById('Email')
}
let projectcard ={
    project1: document.getElementById('project1'),
    project2: document.getElementById('project2')
    // project3: document.getElementById('project3'),
    // project4: document.getElementById('project4')
}

navbuttons.Home.addEventListener('click', function() {
    window.location.href = 'index.html'; //use when i click on home button the home html open
    
});
navbuttons.Skills.addEventListener('click', function() {
    window.location.href = 'skills.html';
}); 
navbuttons.Education.addEventListener('click', function() {
    window.location.href = 'education.html';
});
navbuttons.Projects.addEventListener('click', function() {
    window.location.href = 'project.html'; //use when i click on projects button the projects html open
});
navbuttons.Resume.addEventListener('click', function() {
    window.location.href = 'resume.html'; //use when i click on resume button the resume html open
});
navbuttons.Contact.addEventListener('click', function() {
    window.location.href = 'contact.html'; //use when i click on contact button the contact html open
}); 

Github.addEventListener('click', function() {
    window.open('https://github.com/AliyanAmjad986', '_blank'); // Open GitHub in a new tab;
});
conbuttons.Linkedln.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/aliyan-amjad-610274301', '_blank'); // Open LinkedIn in a new tab
});
conbuttons.Email.addEventListener('click', function () {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=aliyanamjad54@gmail.com&su=Subject%20Here&body=Your%20message%20here','_blank');
});


if(projectcard.project1){
    projectcard.project1.addEventListener('click', function() {
        window.open('https://github.com/AliyanAmjad986/HTML-CSS', '_blank'); // Open project1 in a new tab
    });
}
if(projectcard.project2){
    projectcard.project2.addEventListener('click', function() {
        window.open('https://github.com/AliyanAmjad986/Internship-projects', '_blank'); // Open project1 in a new tab
    });
}


      function morecontent(button) {
      const container = button.closest('.project-info');
      const description = container.querySelector('.project-discription');

      if (description.classList.contains('morecontent')) {
        description.classList.remove('morecontent');
        button.textContent = 'Read less';
      } else {
        description.classList.add('morecontent');
        button.textContent = 'Read more';
      }
    }

   


