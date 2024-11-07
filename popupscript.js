const myname = document.getElementById("myname");

const popup = document.getElementById("popup");
const btns = document.getElementById("btns");
const clickToPop = document.getElementById("clickme");
const ok = document.getElementById("ok");
const cancel = document.getElementById("cancel");
const poptext = document.getElementById("poptext");

clickToPop.addEventListener("click", () => {
    popup.classList.remove("hidden"); 
});
cancel.addEventListener("click", () => {
    error.textContent = "";
    popup.classList.add("hidden"); 
});
ok.addEventListener("click", () => {
    if (poptext.value.trim() === '') {
       
        error.textContent = 'This field is required';
    } else {
        myname.textContent = poptext.value;
        popup.classList.add("hidden"); 
        poptext.value = "";
        error.textContent = "";
    }
   
});
