// $('#learning').hide(3000);

// $('#learning').hide(1000, function(){
//     console.log("content hidden completed...");
// });

// $('#learning').show(1000, function(){
//     console.log("content showen completed...");
// });

$('#btnshow').click(function(){
    $('#learning').toggle(800);
});
$('#btnfin').click(function(){
    $('#learning').fadeIn(800);
});
$('#btnfout').click(function(){
    $('#learning').fadeOut(800);
});
$('#btnsup').click(function(){
    $('#learning').slideUp(800);
});
$('#btnsdown').click(function(){
    $('#learning').slideDown(800);
});