
   //------------------------------- Start dark theme 
const mode = document.getElementById('colorMode');
const body = document.querySelector('body');

let getMode = localStorage.getItem('mode');
    if (getMode == 'light') {
        document.body.classList.toggle('dark-theme');
        mode.classList.toggle('active');
    }
mode.onclick = () => {
    mode.classList.toggle('active');
    document.body.classList.toggle('dark-theme');



    if(body.classList.contains('dark-theme')) {
        return localStorage.setItem('mode', 'light');
    }
        localStorage.setItem('mode', 'dark');
};




   //------------------------------ End dark theme 


