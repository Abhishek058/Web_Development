// $('#learning').hide(3000);

$('#learning').hide(1000, function(){
    console.log("content hidden completed...");
});

$('#learning').show(1000, function(){
    console.log("content showen completed...");
});

$('#btn').click(function(){
    $('#learning').toggle(500);
});