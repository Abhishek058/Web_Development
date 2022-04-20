const dispBtn = document.querySelector('#btn-success')

// using a third party api
dispBtn.addEventListener('click', () => {
    console.log("You clicked the display button");
    const xhr = new XMLHttpRequest()

    // using a rest api
    xhr.open('GET', 'student.json', true)

    xhr.onload = function(){
        if(this.status === 200){
            // parsing the recieved text
            let obj = JSON.parse(this.responseText)
            console.log(obj);

            // publishing dynamically through JS
            let str = ''
            let data = obj.data
            let lst = document.querySelector("#list")
            for(let i = 0; i < data.length ; i++){
                str += `<li>${obj.data[i].student_name} </li>`
            }
            // rendering onto the screen
            lst.innerHTML = str
        }else{
            console.log("Error occurred");
        }
    }

    xhr.send()
})