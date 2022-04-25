const getbtn = document.querySelector("#btn-get");
const postbtn = document.querySelector("#btn-post");
const dispBtn = document.querySelector("#btn-disp");

// using a third party api
getbtn.addEventListener("click", () => {
  console.log("You clicked the display button");
  const xhr = new XMLHttpRequest();

  // using a rest api
  xhr.open("GET", "https://gorest.co.in/public/v2/posts", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // parsing the recieved text
      let obj = JSON.parse(this.responseText);
      // console.log(obj);

      // publishing dynamically through JS
      let str = "";
      let data = obj.data;
      let lst = document.querySelector("#list");
      for (let i = 0; i < obj.length; i++) {
        str += `<li>${obj[i].title} </li>`;
      }
      // rendering onto the screen
      lst.innerHTML = str;
    } else {
      console.log("Error occurred");
    }
  };

  xhr.send();
});

// using a third party api
postbtn.addEventListener("click", () => {
  console.log("You clicked the display button");
  const xhr = new XMLHttpRequest();

  // using a rest api
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);

  xhr.getResponseHeader("Content-type", "application/json");

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("Error occurred");
    }
  };
  prmts = {"name":"ram", "salary": 64560};
  xhr.send(prmts);
});

// using a third party api
dispBtn.addEventListener("click", () => {
  console.log("You clicked the display button");
  const xhr = new XMLHttpRequest();

  // using a rest api
  xhr.open("GET", "https://gorest.co.in/public/v2/posts", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // parsing the recieved text
      let obj = JSON.parse(this.responseText);
      console.log(obj);
    } else {
      console.log("Error occurred");
    }
  };

  xhr.send();
});
