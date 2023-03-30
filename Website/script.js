
$(function(){
    $pbandj = $(document.getElementById("pbandj"));
    $pbandj.hide().slideDown(1500);
    
    
    });
    
    

$(function(){
    var x = 0;
    setInterval(function(){
        x-=10;
        $('body').css('background-position', x + 'px 0');
    }, 10);
})
$(function(){
var audio = $("audio")[0];
    audio.play();
});