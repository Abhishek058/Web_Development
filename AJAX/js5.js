const dispBtn = document.getElementById('btn-success');

dispBtn1.addEventListener("click", () => {
    console.log("you clicked");
    xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);

    xhr.onload = function() {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
        }
    }
});