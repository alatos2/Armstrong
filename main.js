const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const txtNum = document.getElementById("txtNum");
  const result = document.getElementById("result");
  
  //splitting nos into individual nos and storing in an 
  //array
  const txtValArr = txtNum.value.split("");
  
  //cube of individual nos & finding the sum
  const x = txtValArr.map(x => Math.pow(x, 3)).reduce((callback, x) => callback + x);
  
  if(x == txtNum.value){
    result.innerHTML = "<div class='success'>" + txtNum.value + " is an Armstrong number";
  } else {
    result.innerHTML = "<div class='failure'>" + txtNum.value + " is NOT an Armstrong number</div>";
  }
})

//function to disallow space input
const preventSpace = (event) => {
  const txtNum = document.getElementById("txtNum");
  const result = document.getElementById("result");
  const key = event.keyCode;
  if(key === 32){
    event.preventDefault();
    alert("spaces are not allowed");
    txtNum.value = "";
    //result.innerHTML = "<div class='failure'>Spaces are NOT allowed</div>";
  }
}

//function to check if input is a number, has no value & length of value
const checkInput = () => {
  const txtNum = document.getElementById("txtNum");
  const result = document.getElementById("result");
  
  if(isNaN(txtNum.value)){
    result.innerHTML = "<div class='failure'>" + txtNum.value + " is NOT a number</div>";
  }else if(txtNum.value == "" || txtNum.value.length < 3)
  {
    result.innerHTML = "";
    document.getElementById("btn").disabled = true;
  }else {
    document.getElementById("btn").disabled = false;
  }
}