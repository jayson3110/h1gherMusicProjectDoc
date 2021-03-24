function videoPopup(objectName, videoUrl){
  this.videoUrl= videoUrl;
  this.screenSize= $(window).width();
  this.heightOfVideo= this.screenSize * .4;
  this.videoPop= '<div class="popUpWrapper">'+
                    '<div id="videoWrap"">'+
                    '<button type="button" class="videoClose" onclick="'+objectName+'.closeVideo()">X</button>'+
                    '<iframe width="100%" height="'+this.heightOfVideo+'" src="'+this.videoUrl+'" frameborder="0" allowfullscreen></iframe></div>'+
                  '</div>', 
  this.closeVideo= function(){
    $('.blackOut').fadeOut('slow');
    $('.popupAlignCenter').html("");
  },
  this.launchPopUp= function(){
    $(window).scroll(function() { return false; });
    if($('.blackOut').css('display')=="none"){
        $('.blackOut').fadeIn('slow');
    }
    $('.blackOut').css('z-index','1000');
    $('.popupAlignCenter').html(this.videoPop);
    $('.popUpWrapper').fadeIn('slow'); 
  }
};

$(document).mouseup(function (e) {
  var container = $(".popUpWrapper");
  if($('.blackOut').css('z-index')!="0"){
    if (!container.is(e.target) && container.has(e.target).length === 0){
      $('.blackOut').fadeOut('slow');
     }
  }
});

var videoPopupItem= new videoPopup('videoPopupItem', 'https://www.youtube.com/embed/PJ09qZdO4LE?autoplay=1&mute=1');
var videoPopupItem2 = new videoPopup('videoPopupItem2', 'https://www.youtube.com/embed/1-ljk1DqVx4?autoplay=1&mute=1');