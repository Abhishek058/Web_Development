const user = document.querySelector('#userip');
const pass = document.querySelector('#passip');
let subtn = document.getElementById("subip");
let obj = {}


document.addEventListener("DOMContentLoaded", () => {
  console.log("DATA RECIEVED");
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "json1.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // parsing the recieved text
        obj = JSON.parse(this.responseText);
    } else {
      console.log("Error occurred");
    }
  };

  xhr.send();
});

subtn.addEventListener("click", () => {
  console.log("Checking Data");
    const userG = user.value;
    const passG = pass.value;
    flag = false;

    for(var i=0; i<obj.data.length; i++){
        if(userG === obj.data[i].username && passG === obj.data[i].password){
            flag = true;
            break;
        }
    }

    if(flag){
        document.getElementById('op').innerText = "Successfully LogedIn";
    }
    else{
        document.getElementById('op').innerText = "Invalid Username or Password";
    }
});
