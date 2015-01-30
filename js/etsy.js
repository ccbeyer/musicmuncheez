$.ajax({
  url: "https://openapi.etsy.com/v2/listings/active.js?keywords=drake&limit=3&includes=Images:1&category=Clothing&sort_on=score&api_key=0oz57tcj01fxv0tcw2bgiaw2",
  dataType: 'jsonp',
  success: function(data) {
    console.log("yes");
    if (data.ok) {
      $('#etsy-images').empty();
      if (data.count > 0) {
        $.each(data.results, function(i,item) {
          $("<img/>").attr("src", item.Images[0].url_170x135).appendTo("#etsy-images").wrap(
            "<a href='" + item.url + "'></a>");
        });
      } else {
        ('<p>No results.</p>').appendTo('#etsy-images');
      }
    } else {
      $('#etsy-images').empty();
      alert(data.error);
    }
  }
});