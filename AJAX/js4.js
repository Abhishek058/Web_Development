let getBtn1 = document.querySelector('#btn-primary');
let getBtn2 = document.querySelector('#btn-success');

getBtn1.addEventListener('click', () => {
    console.log("You clicked primary putton");

    const xhr = new XMLHttpRequest();

    xhr.open('GET', "ajaxServer.txt", true);

    xhr.onprogress = function() {
        console.log("In progress.....");
    }
    xhr.onload = function() {
        if(this.status == 200){
            console.log(this.responseText);
        }
        else{
            console.error("Error occured");
        }
    }

    xhr.send()
})