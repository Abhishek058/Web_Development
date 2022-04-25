const dispBtn = document.querySelector('#btn-success')

// using a third party api
dispBtn.addEventListener('click', () => {
    console.log("You clicked the display button");
    const xhr = new XMLHttpRequest()

    // using a rest api
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);

    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }else{
            console.log("Error occurred");
        }
    }
    prmts = {"name":"ram", "salary": 64560};
    xhr.send(prmts);
})