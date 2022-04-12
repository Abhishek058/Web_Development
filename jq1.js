$(document).ready(function(){
    console.log("seperate jquery");
});

// console.log("welcome");
// console.log($);
$("h2").click(function () {
  console.log("You clicked");
  // $('h2').hide();
  $(this).hide();
  document.getElementById("hid").innerText = "Hidden";
});

$("#second").click(function () {
  console.log("clicked jquery2", this);
});

$(".test").click(function () {
  console.log("clicked jquery3 4", this);
});

$('dtg').dblclick(function(){
    console.log("clicked h3");
});

$('dtg').mouseenter(function(){
  console.log("clicked h3", this);
});
$('dtg').hover(function(){
  console.log("clicked h3", this);
});