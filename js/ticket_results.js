$.ajax({
  url: 'http://api.seatgeek.com/2/events?q=g-eazy&callback=fireEvent',
  success: function(data) {
    var events = [];

    // Make your html for the events table
    $.each(data.events, function (i, evt) {
      events.push([
        '<tr>', 
          '<td>' + evt.datetime_local.split('T', 1).join("") + '</td>',
          '<td><a href="' + evt.url + '">' + evt.title + '</a><br />' + evt.venue.name + '</td>',
          '<td><a href="' + evt.url + '" class="btn">Buy Tickets</a></td>',
        '</tr>'
      ].join("\n"));
    });

    //console.log(events);

    $(".events").append(events.join("\n"));
  },
  
  dataType: 'jsonp'
});