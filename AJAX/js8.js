const user = document.querySelector('#userip');
const pass = document.querySelector('#passip');
const subtn = document.querySelector('#subip');

document.addEventListener('click', () => {
    console.log("Checking info");
    const xhr = new XMLHttpRequest()

    // using a rest api
    xhr.open('GET', 'json1.json', true)

    xhr.onload = function(){
        if(){
            
        }else{
            alert("User not found");
        }
    }

    xhr.send()
})