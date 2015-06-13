// Put your custom JS here...

var SiteActions = SiteActions || {};

SiteActions.parsley_base_options = {
  errorClass: 'form__input--error',
  successClass: 'form__input--success',
  errorsWrapper: '<ul class="form__ul--errorlist"></ul>',
  errorTemplate: '<li class="form__li--errorlist"></li>'
};

$(document).ready(function(){


  $(".form--cp").each(function(){
    $(this).parsley(SiteActions.parsley_base_options);
  });

  var window_width = $(window).width();
  if(window_width < 1040){
    $("select").chosen({disable_search_threshold: 10, width: '100%'});
  } else if(window_width < 1450) {
    $("select").chosen({disable_search_threshold: 10, width: '65%'});
  } else {
    $("select").chosen({disable_search_threshold: 10, width: '70%'});
  }

  $(window).resize(function() {
    var window_width = $(window).width();
    if(window_width < 1040){
      $(".chosen-container").css('width', '100%');
    } else if(window_width < 1450) {
      $(".chosen-container").css('width', '65%');
    } else {
      $(".chosen-container").css('width', '70%');
    }
  });

  $(".flash__btn--close").click(function(){
    $(this).parent().fadeOut();
  });

});