//App entry point
define(['jquery','prettify'], function() {

  function htmlEncode(value){
    return $('<div/>').text(value).html();
  }

  function htmlDecode(value){
    return $('<div/>').html(value).text();
  }

  $("textarea").keyup(function() {
    $("pre").html(htmlEncode($(this).val()));
    window.prettyPrint();
  });

});