// this for menu 
const menu = document.getElementById("menu");
const action = document.getElementById("actions");

// this for dark mode 

const darkModeBottom = document.getElementById('darkModeBottom');
const darkModeIcon = document.getElementById('darkModeIcon');
let isDark = false;

// this is menu code 

menu.onclick= function(){
    if(action.style.display === 'none' || action.style.display ===''){
        action.style.display= 'block';
    }
    else{
    menu.style.display = 'block';
    
    }
}
function sidebar() {
    action.style.display = 'none';
}

// this is dark mode code 

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('darkMode');
    darkModeIcon.src = '../images/icons/light-mode.png';
    isDark = true;
}

darkModeBottom.addEventListener('click', () => {
    if (isDark) {
        document.body.classList.remove('darkMode');
        darkModeIcon.src = '../images/icons/light-mode (1).png';
        localStorage.setItem('darkMode', 'disabled'); 
    } else {
        document.body.classList.add('darkMode');
        darkModeIcon.src = '../images/icons/light-mode.png'; 
        localStorage.setItem('darkMode', 'enabled'); 
    }
    isDark = !isDark; 
});
