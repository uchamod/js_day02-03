const myname = document.getElementById("myname");

const popup = document.getElementById("popup");
const btns = document.getElementById("btns");
const clickToPop = document.getElementById("clickme");
const ok = document.getElementById("ok");
const cancel = document.getElementById("cancel");
const poptext = document.getElementById("poptext");
//press click button
clickToPop.addEventListener("click", () => {
    popup.classList.remove("hidden"); 
    let opacity = 0;
    let timer = setInterval(() => {
        opacity++;
        popup.style.opacity = opacity + "%";
        if (opacity >= 100) {
            clearInterval(timer);
        }
    }, 30);
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
      
        poptext.value = "";
        error.textContent = "";
        let opacity = 100;
    let timer = setInterval(() => {
        opacity--;
        
        popup.style.opacity = opacity + "%";
        if (opacity === 0) {
           
          
            popup.classList.add("hidden"); 
            clearInterval(timer);
        }
    }, 30);
       
    }
   
});
