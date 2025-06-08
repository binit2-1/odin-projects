document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".btn");
    const equal = document.querySelector(".btneq");
    const clear = document.querySelector(".btnc");

    function displayValue(value){
        display.textContent += value   
    }

    buttons.forEach(button => {
        button.addEventListener('click', () =>
        {   display.style.color = "white";
            display.style.textAlign = "right";
            if(button.classList.contains("btnc")){
                display.textContent = "";        
            }
            else if(button.classList.contains("btnd")){
                display.textContent = display.textContent.slice(0, -1)
            }
            else if(button.classList.contains("btneq")){
                const exp = display.textContent.replace(/x/g, "*")
                display.textContent = eval (exp);
            }
            else{
                displayValue(button.textContent);
            }
        });
    });
});
