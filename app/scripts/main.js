
//when everything is good to go then run
$(document).ready(function() {

var image, title, moneyCode, price;

//run through data and for each elements it finds...the items will be define by the last line
//In this case jQuery will place all of them using .append in the targeted area ".final"
//each element contain '' even if it's inside cource

etsyitems.results.forEach(function(a) {
     image = '<div class="images">' + '<img src="' + a.Images[0].url_570xN + '" style="width: 250px; height: 200px;"/></div>';
     title = '<div class="title">' + a.title + '</div>';
     moneyCode = '<div class="moneyCode">' + a.currency_code + '</div>';
     price = '<div class="price">' + '$' + a.price + '</div>';

//will place items in block title .final in html
//will also add properties of image, title, moneyCode and price
//this div will go into scss and won't show in html, don't mix this up
     $('.final').append('<div class="etsy">' + image + title + moneyCode + price  + '</div>');
});

});


