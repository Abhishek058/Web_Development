// $('#learning').hide(3000);

$('#learning').hide(3000, function(){
    console.log("content hidden completed...");
});

$('#learning').show(4000, function(){
    console.log("content showen completed...");
});
