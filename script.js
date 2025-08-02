

let navbuttons={
    Home: document.getElementById('Home'),
    Education: document.getElementById('Education'),
    Skills: document.getElementById('Skills'),  
    Projects: document.getElementById('Projects'),
    Resume: document.getElementById('Resume'),
    Contact: document.getElementById('Contact')
} //mainlearning
let conbuttons ={
    Github: document.getElementById('Github')
    // LinkedIn: document.getElementById('LinkedIn'),
    // Twitter: document.getElementById('Twitter'),
    // Facebook: document.getElementById('Facebook'),
    // Instagram: document.getElementById('Instagram')
}

navbuttons.Home.addEventListener('click', function() {
    window.location.href = 'index.html'; //use when i click on home button the home html open
});
navbuttons.Skills.addEventListener('click', function() {
    window.location.href = 'Skills.html';
}); 
navbuttons.Education.addEventListener('click', function() {
    window.location.href = 'education.html';
});
Github.addEventListener('click', function() {
    window.open('https://github.com/AliyanAmjad986', '_blank'); // Open GitHub in a new tab;
});