const sucbtn = document.querySelector('#btn-success')

// using a third party api
sucbtn.addEventListener('click', () => {
    console.log("You clicked the display button");
    const xhr = new XMLHttpRequest()

    // using a rest api
    xhr.open('GET', 'https://gorest.co.in/public/v2/posts', true)

    xhr.onload = function(){
        if(this.status === 200){
            // parsing the recieved text
            let obj = JSON.parse(this.responseText)
            console.log(obj);

            // publishing dynamically through JS
            let str = ''
            let data = obj.data
            let lst = document.querySelector("#list")
            for(let i = 0; i < obj.length ; i++){
                str += `<li>${obj[i].title} </li>`
            }
            // rendering onto the screen
            lst.innerHTML = str
        }else{
            console.log("Error occurred");
        }
    }

    xhr.send()
})