
//testing to pull the elements into the html page//
//testing to pull the title, and then move on with images...no luck so far
//receving error undefine on html page as list item...it works but doesn't work..AH! SOS
//test to pull just the title first and then attempt the image...error still..just added p element to test
//$(document).ready(function() {

var pull = '';
etsyitems.forEach (function (a) {
  pull =  '<li><img src="' + a.title + '" /><p>' + a.title + '</p>';

  $('#tracks').append(pull);
});

});




