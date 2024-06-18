// ------------------------------------------- Variables ------------------------------------------- 
let displayContent = document.querySelector('.content');
let operationBtn = document.querySelectorAll(".operation")




// Adding Logic to delete button 
deleteKey.addEventListener("click", ()=>{
    displayContent.innerHTML = displayContent.innerHTML.split(" ").join("").split("").slice(0, -1).join("");
    displayContent.scrollLeft = displayContent.scrollWidth;
})

// Logic for All clear Button

allClear.addEventListener("click", ()=>{
    displayContent.innerHTML = "";
        displayContent.scrollLeft = displayContent.scrollWidth;

})

// Adding logic for operations 

document.querySelectorAll(".operation").forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        displayContent.innerHTML += btn.innerHTML;
        displayContent.scrollLeft = displayContent.scrollWidth;

    })
})

// Adding logic for the Numbers 


document.querySelectorAll(".black").forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        displayContent.innerHTML += btn.innerHTML;
        displayContent.scrollLeft = displayContent.scrollWidth;

    })
})

// Adding logic for the equal button

equal.addEventListener("click", ()=>{
    try{
    let result = eval(displayContent.textContent.replace("×","*").replace("÷","/"));
    if (result === undefined){
        displayContent.innerHTML = "Error";
    }
    else{
        displayContent.innerHTML = result;
        displayContent.scrollLeft = displayContent.scrollWidth;

    } 
    }catch{
        displayContent.innerHTML = "Error";
    }
})

// Adding logic for the Percentage button
percentage.addEventListener("click",()=>{
    displayContent.textContent+= percentage.textContent
    displayContent.scrollLeft = displayContent.scrollWidth;

})