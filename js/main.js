//App entry point
define(['lib/prettify','jquery'], function(prettify) {

  function htmlEncode(value){
    return $('<div/>').text(value).html();
  }

  var update = function() {

    var code = htmlEncode($(this).val());

    code = $(prettify.prettyPrintOne(code));
    //loop through spans and swap out space chars for html
    code.each(function() {
      $(this).html( 
        $(this).html().replace(/\n/g,'<br/>').replace(/\ /g,'&nbsp;')
      );
    });

    $("pre").html(code);
  }
  
  $("textarea").keyup(update);

});