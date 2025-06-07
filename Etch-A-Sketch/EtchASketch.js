document.addEventListener("DOMContentLoaded", () => {
    const container=document.querySelector(".container");
    const resize=document.getElementById("Resize");

    function randomColor() {
        const r= Math.floor(Math.random() * 256);
        const g= Math.floor(Math.random() * 256);
        const b= Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }


    function createGrid(size){
        container.innerHTML = "";
        // squareSize=960/size;
        for(let i=0;i<size*size;i++){
            const square=document.createElement("div");
            square.classList.add("square");
            square.style.width= (100/size) + '%';
            square.style.height= (100/size) + '%';
            
            square.addEventListener("mouseenter",() =>{
                square.style.backgroundColor = randomColor();
            });
            
            container.appendChild(square);
        }
    }

    resize.addEventListener("click", () =>{
        let newSize=prompt('Enter new grid Size (1-100): ');
        newSize = parseInt(newSize);

        if (newSize>0 && newSize <= 100) {
            createGrid(newSize);
        }
        else {
            alert("Please enter a valid number between 1 and 100.");
        }

    });
    createGrid(16);

});
    
    