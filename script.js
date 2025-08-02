

let navbuttons={
    Home: document.getElementById('Home'),
    Education: document.getElementById('Education'),
    Skills: document.getElementById('Skills'),  
    Projects: document.getElementById('Projects'),
    Resume: document.getElementById('Resume'),
    Contact: document.getElementById('Contact')
} //mainlearning

navbuttons.Home.addEventListener('click', function() {
    window.location.href = 'index.html'; //use when i click on home button the home html open
});
navbuttons.Skills.addEventListener('click', function() {
    window.location.href = 'Skills.html';
}); 