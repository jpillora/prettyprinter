//App entry point
define(['jquery','lib/prettify'], function() {

  function htmlEncode(value){
    return $('<div/>').text(value).html();
  }

  $("textarea").keyup(function() {
    $("pre").html(htmlEncode($(this).val()));
    window.prettyPrint();
  });

});