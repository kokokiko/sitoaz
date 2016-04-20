$(document).ready(function() {
    $("#demo").textillate();
    $("#demo2").textillate();
    $("#maincontenuto").css('background-image','url(img/sn2.png)');
    
 var mt = $('#motto').marquee({
   //speed in milliseconds of the marquee
	duration: 8000,
	//gap in pixels between the tickers
	gap: 50,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: false

});
    $('#motto').mouseenter(function(){
    
    mt.marquee('pause');
    
    });
    $('#motto').mouseleave(function(){
    
    mt.marquee('resume');
        
    });
    $('#motto').click(function(){
    window.location.href = "index.html";
    });
});
var esegui =  $("#demo");

esegui.textillate({
        
        loop:false,
        Autostart:true,
        in:{
            effect: 'swing',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
            
                }
        
    });
var api = esegui.data('textillate');
$("#demo").click(function() {
    $("#demo").textillate({     
        in:{effect: 'swing'}
     })
    
   api.start();
});

var esegui2 = $('#title');
esegui2.textillate({
    loop:false,
        Autostart:true,
        in:{
            effect: 'bounceInDown',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
            
                }
});
var api2 = esegui2.data('textillate');



$(document).on('click', '#title', function(){
    $("#title").textillate({
        in:{effect:'pulse'}
    })
    api2.start();
});




var ap;
var ap2;
var ap3;
var ap4;
var opened = -1;
function eseguito(){
   opened += 1;
    if (opened % 2 == 0){
        
        
            $("#maincontenuto").css ('margin-left', '20%');
          $("#menu").css ('visibility', 'visible');
         $("#1").css ('display', 'block');
         $("#12").css ('display', 'block');
         $("#13").css ('display', 'block');
         $("#14").css ('display', 'block');
        
          var es = $("#1").textillate({
          loop:false,
          Autostart:false,
        in:{
            effect: 'wobble',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        }
        });

          ap = es.data('textillate');

 var es2 = $("#12").textillate({
          loop:false,
          Autostart:false,
        in:{
            effect: 'wobble',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        }
        });

          ap2 = es2.data('textillate');

 var es3 = $("#13").textillate({
          loop:false,
          Autostart:false,
        in:{
            effect: 'wobble',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        }
        });

          ap3 = es3.data('textillate');

 var es4 = $("#14").textillate({
          loop:false,
          Autostart:false,
        in:{
            effect: 'wobble',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        }
        });

          ap4 = es4.data('textillate');


    }else{
            $("#menu").css ('visibility', 'hidden');
            $("#maincontenuto").css ('margin', 'auto');
            $("#1").css ('display', 'none');
         $("#12").css ('display', 'none');
         $("#13").css ('display', 'none');
         $("#14").css ('display', 'none');
        
    }
};

$("#1").mouseenter(function(){    
   
        if (opened % 2 == 0){    
            ap.start();
        }
    
    });
$("#12").mouseenter(function(){    
    if (opened % 2 == 0){    
    ap2.start();
    }
    });
$("#13").mouseenter(function(){    
    if (opened % 2 == 0){    
    ap3.start();
    }
    });
$("#14").mouseenter(function(){    
    if (opened % 2 == 0){    
    ap4.start();
    }
    });


$("#begin").mouseover(function(){
    
    $("#maincontenuto").css('background-image','url(img/sn.png)');
});

$("#begin").mouseout(function(){
    
    $("#maincontenuto").css('background-image','url(img/sn2.png)');
});

$("#testo").mouseover(function(){
    $('#maincontenuto3').css ('background-image','url(img/sn.png)');
});
$("#testo").mouseleave(function(){
    $('#maincontenuto3').css ('background-image','url(img/sn2.png)');
});


















$(document).on('mouseover', '.palla', function(){
     $('#bg').css ('background-image','url(img/sn.png)')
 
             $('#maincontenuto3').css ('background-image','url(img/sn.png)')
      
});
$(document).on('mouseleave', '.palla', function(){
    
         $('#maincontenuto3').css ('background-image','url(img/sn2.png)');
        $('#bg').css ('background-image','url(img/sn2.png)');
});






$("#begin").click(function(){
      window.location.href = "banane.html";
});


$(document).on('click','#w', function(){
     window.location.href = "w.html";
});
$(document).on('click','#n', function(){
     window.location.href = "n.html";
});
$(document).on('click','#p', function(){
     window.location.href = "p.html";
});






var s;
$(document).on('mouseenter', '.tot', function() {
     s = $(this);
    $('.buybtn').mouseenter(function(){
        
    $(s).css ('opacity','1');
    })
});
$(document).on('mouseout', '.buybtn', function() {
      $(".tot").css ('opacity','0.6');
});

var opened2 = 1;
var $backup = $("#contenuto").html();

$('.imgs').css ('cursor', 'zoom-in');

$(document).on('click','.imgs', function(){
    opened2 += 1;
    
     $('.imgs').css ('cursor', 'zoom-out');
    if (opened2 % 2 == 0){
        var $img = $(this).clone();
        
        
        var $bgdiv = $("<div>");
        $bgdiv.click(function(){$("#contenuto").html($backup); opened2 += 1;
                               $(".imgs").css ('cursor', 'zoom-in');
                                 $("#title").textillate({in:{effect:'pulse'}})
                                 api2.start(); 
                                
                               
                               });
        $($bgdiv).css ('cursor', 'zoom-out');
        $bgdiv.css ('width','100%');
        $bgdiv.css ('height','100%');
        $bgdiv.css ('position', 'absolute');
        
        $bgdiv.css ('top', '0px');
        $bgdiv.css ('left', '0px');
                
        $bgdiv.css ('z-index', '-1');
        $bgdiv.css ('opacity', '0.5');
        $bgdiv.css ('transition', 'background-color 0.5s ease');
         
        $bgdiv.css ('background-color', '#333');
        
        $("#contenuto").prepend($bgdiv);
        $("#contenuto").prepend($img);
          $($img).css ('position','absolute');
          $($img).css ('top','50%');
          $($img).css ('left','50%');
          $($img).css ('width','500px');
          $($img).css ('height','500px');        
          $($img).css ('margin-left','-250px');
          $($img).css ('margin-top','-250px');
        
    } else{
        $("#contenuto").html($backup);
        $(".imgs").css ('cursor', 'zoom-in');
           $("#title").textillate({in:{effect:'pulse'}})
                                 api2.start(); 
    }
});
