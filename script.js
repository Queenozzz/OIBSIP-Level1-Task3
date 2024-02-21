const container = document.querySelector(".container");
const userName = document.querySelector("#title");
const enterButton = document.querySelector(".name-box button");
const degreeInput = document.querySelector("#degree");
const convertButton = document.querySelector("#convert-button");
const tempTypeSelect = document.querySelector("#temp-type");
const formular = document.querySelector(".formular p");

let result = degreeInput.value;

function showContainer(){
    const name = document.querySelector(".name-box input").value;

    if(name === ""){
        container.style.height = "130px";
        document.querySelector(".output").classList.remove("active");
        document.querySelector(".type").classList.remove("active");
        document.querySelector("#convert-button").classList.remove("active");
    }else{
        container.style.height = "520px";
        document.querySelector(".output").classList.add("active");
        document.querySelector(".type").classList.add("active");
        document.querySelector("#convert-button").classList.add("active");
    }
   
   
}


enterButton.addEventListener("click", () => {
    const name = document.querySelector(".name-box input").value;
    
   
    if (name === ""){
        userName.innerText = `please enter username`;  
        userName = document.querySelector("#title").style.fontSize = "35px";
        
        
    }
    else {
        userName.innerText = `Hello ${name} , enter °C.`;
        userName = document.querySelector("#title").style.fontSize = "35px";
     
       

    }

    
})




function temperatureCovert() {
    const inputValue = parseFloat(degreeInput.value);
    
    if (tempTypeSelect.value === "fahrenheit") {
        result = (inputValue * 9 / 5) + 32;
        formular.innerText = `${inputValue} ${"(°C x 9/5) + 32"} = ${result.toFixed(2)} °F`;
    } else if (tempTypeSelect.value === "kelvin") {
        result = inputValue + 273.15;
        formular.innerText = `${inputValue} ${"°C + 273.15"} = ${result.toFixed(2)} °K`;
    } else {
        formular.innerText = `${inputValue} ${"°C"} `;
    }
}


function Conversion(){
    const inputValue = parseFloat(degreeInput.value);
    if(!isNaN(inputValue)) {
        temperatureCovert();
    }else {
        formular.innerHTML = "Please enter a Valid Degree";
    }
}

convertButton.addEventListener("click", Conversion);
