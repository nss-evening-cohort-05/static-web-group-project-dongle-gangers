var products = document.getElementById("products");
var dongle = [
{image:"images/cookie.png", descrip:'Punxsutawney Phil cookie dongle <br> "limited edition: 6 more weeks of winter" <br> $2.50'},
{image:"images/coaster.png", descrip:'coaster dongle <br> "rolling with life\'s ups and downs- you look parched" <br> $6.66'},
{image:"images/bread.png", descrip:'bread dongle <br> "baguette syncs with last season\'s dongleberry jam" <br> $5'},
{image:"images/hammer.png", descrip:'hammer dongle <br> "it\'s always hammer time with this dongle" <br> $5.43'},
{image:"images/pen.png", descrip:'pen dongle <br> "it\'s mightier than the sword dongle" <br> $3.33'},
{image:"images/pillow.jpg", descrip:'pillow dongle <br> "a soft landing from any gitcident" <br> $1 and a smile'},
{image:"images/light.jpg", descrip:'light dongle <br> "heavy duty" <br> $17.76'},
{image:"images/duck.png", descrip:'deluxe rubber duckie dongle <br> "epic as duck" <br> $12.12'},
{image:"images/sink.jpg", descrip:'kitchen sink dongle <br> "everything and the..." <br> $1,000,001'}
];


for (var i = 0; i < dongle.length; i++) {
  var productCard = "";
  productCard +="<div class='productCard'><img class='productpic' src=" + dongle[i].image + "><p class='lightBox'>" + dongle[i].descrip;
  products.innerHTML += productCard

  console.log()
}