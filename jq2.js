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
$('#btnfin').fadeIn(function(){
    $('#learning').toggle(800);
});
$('#btnfout').fadeIn(function(){
    $('#learning').toggle(800);
});
// $('#btn').click(function(){
//     $('#learning').toggle(800);
// });
