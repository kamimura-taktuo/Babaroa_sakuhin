/*
var c = 0;

(function() {
    "use strict";
    var video = document.getElementById('video');
    var movie_url = "Video/cookie動画.mp4";
    var movie_url1 = "Video/動画①.mp4";
    video.addEventListener('ended', function() {
    var count;
    count = (c%2)
    if(count = 0)
    {
        video.src = movie_url;
    }
    else
    {
        video.src = movie_url1;
    }
      video.load();
      video.play();
      c++;
    })
  })
  */



//トップページの動画切り替え
/* var interval;
 var c = 0;
function video_loop()
{
    "use strict";
    
    var returnValue;
    var video = document.getElementById('video');
    var movie_url = "Video/cookie動画.mp4";
    var movie_url1 = "Video/動画①.mp4";
    console.log(c);
    switch (c){
        case 0:
            //loop();
            c++;
            break;
            
        case 1:
            returnValue = video.ended;
            console.log(returnValue);
            video.addEventListener('ended', function() {
                video.src = movie_url;
                video.load();
                video.play();
              })
            break;
            c++;
            case 2:
            returnValue = video.ended;
            video.addEventListener('ended', function() {
                video.src = movie_url1;
                video.load();
                video.play();
              })
            break;
            c--;
    }
}
loop();



function loop()
{
    clearInterval(interval);
    interval = setInterval(video_loop,17);
}

  /*(function() {
    "use strict";
    var video = document.getElementById('video');
    var movie_url = "Video/cookie動画.mp4";
  
    video.addEventListener('ended', function() {
      video.src = movie_url;
      video.load();
      video.play();
    })
  })();

*/




$(document).ready(function(){
  $('.single-item').slick({
    setting: setting-value
  });
});


$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
  



