$.ajax({
  url: 'http://api.seatgeek.com/2/events?q=g-eazy&callback=fireEvent',
  success: function(data) {
    var events = [];

    events.push(['<tr>', 
      '<th>' + "Date" + '</th>',
      '<th>' + "Event" + '</th>',
      '<th>' + "Starting From" + '</th>',
      '<th>' + "Buy!" + '</th>',
    '</tr>'
    ].join("\n"));

    // Make your html for the events table
    $.each(data.events, function (i, evt) {
      var lowest_price = evt.stats.lowest_price;
      if (typeof lowest_price == "object") {
        lowest_price = "Sold out!";
      } else {
        lowest_price = "$" + lowest_price;
      }
      events.push([
        '<tr>', 
          '<td>' + evt.datetime_local.split('T', 1).join("") + '</td>',
          '<td><a href="' + evt.url + '">' + evt.title + '</a><br />' 
          + evt.venue.name + '<br />' + evt.venue.city + ', ' + evt.venue.state + '</td>',
          '<td>' + lowest_price + '</td>',
          '<td><a href="' + evt.url + '" class="btn">Buy Tickets</a></td>',
        '</tr>'
      ].join("\n"));
    });

    //console.log(events);
    $(".events").append(events.join("\n"));
  },
  
  dataType: 'jsonp'
});