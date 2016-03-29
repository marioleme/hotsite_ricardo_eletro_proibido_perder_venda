$(document).ready(function(){
    // $('.modal').each(function(){
    //         var src = $(this).find('iframe').attr('src');

    //     $(this).on('click', function(){

    //         $(this).find('iframe').attr('src', '');
    //         $(this).find('iframe').attr('src', src);

    //     });
    // });

  autoPlayYouTubeModal();

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  function autoPlayYouTubeModal() {
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.click(function () {
          var theModal = $(this).data("target"),
              videoSRC = $(this).attr("data-theVideo"),
              videoSRCauto = videoSRC + "?autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' a.close').click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
      });
  }
   
});
