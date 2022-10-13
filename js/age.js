$(document).ready(function(){
    // put the popup at the start of the body
    $('#ageWrapper').prependTo($('body'));
  
    // check if the age has already been verified
    if (($.cookie('age')) !== 'true') { $('#ageWrapper').addClass('ageConfirmed'); }
  
    // if the "yes" button is clicked, add a cookie and hide the popup
    $('#ageOkay').click(function() {
      $.cookie('age', 'true', { expires: 1, path: '/' });
      $('#ageWrapper').removeClass('ageUnknown');
    });
  
    // if the "no" button is clicked, take the user elsewhere
    $('#ageBad').click(function() {
      window.location.href='http://www.hasbro.com/mylittlepony/en_US/';
    });
  });