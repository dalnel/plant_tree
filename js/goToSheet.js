$('.plant-button').click(function(){
    $('html, body').animate({scrollTop: $("#sheet").offset().top}, 200);
})

$('.plant-button p').click(function(){
    console.log("in");
    $('html, body').animate({scrollTop: $("#sheet").offset().top}, 200);
})