$.ajax({
  url: "https://openapi.etsy.com/v2/listings/active.js?keywords=drake&limit=3&includes=Images:1&category=Clothing&sort_on=score&api_key=0oz57tcj01fxv0tcw2bgiaw2",
  dataType: 'jsonp',
  success: function(data) {
    console.log("yes");
    if (data.ok) {
      $('.merch').empty();
      if (data.count > 0) {
        $.each(data.results, function(i,item) {

          $("<img/>").attr("src", item.Images[0].url_170x135).attr("class","merch-pic").appendTo(".merch").wrap(
            "<div class='merch-pic-div'></div>");
        });
      } else {
        ('<p>No results.</p>').appendTo('.merch');
      }
    } else {
      $('.merch').empty();
      alert(data.error);
    }
  }
});


/*

<div class="merch-pic-div">
<img class="merch-pic" src="http://images.cdn.bigcartel.com/bigcartel/product_images/146357161/max_h-1000+max_w-1000/IMG_9966.jpeg"/>
</div>

*/