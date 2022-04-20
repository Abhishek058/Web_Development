const dispBtn = document.querySelector('#btn-success')

// using a third party api
dispBtn.addEventListener('click', () => {
    console.log("You clicked the display button");
    const xhr = new XMLHttpRequest()

    // using a rest api
    xhr.open('POSt', 'http://dummy.restapiexample.com/api/v1/create', true);

    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onload = function(){
        if(this.status === 200){
            // parsing the recieved text
            // let obj = JSON.parse(this.responseText)
            // console.log(obj);

            // publishing dynamically through JS
            // let str = ''
            // let data = obj.data
            // let lst = document.querySelector("#list")
            // for(let i = 0; i < data.length ; i++){
            //     str += `<li>${obj.data[i].student_name} </li>`
            // }
            // // rendering onto the screen
            // lst.innerHTML = str

            console.log(this.responseText);
        }else{
            console.log("Error occurred");
        }
    }

    xhr.send()
})