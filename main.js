const logos = document.getElementsByClassName("logo");
const logoMode = document.getElementById("logo-mode");
let dark = true;
logoMode.addEventListener("click",()=>{
    Array.from(logos).forEach(logo => {
        if(dark){
            logo.src='Logo.svg';
        }
        else{
            logo.src='Logo_invert.svg';
        }
    });
    dark = !dark;
    document.documentElement.classList.toggle("dark");
});