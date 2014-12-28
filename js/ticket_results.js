window.onload = function() {
	seatgeek.events({ q : "wiz khalifa" }, function(err, events) {
	  	if (err) return console.log(err);
	  	console.log(events);
	});	

	var myTableDiv = document.getElementById("tickets");
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");

    table.border = '1'
    table.appendChild(tableBody);

	var heading = new Array();
	heading[0] = "Event"
	heading[1] = "Time"
	heading[2] = "Location"

	var  = new Array()
    stock[0] = new Array("Cars", "88.625", "85.50", "85.81", "987")
    stock[1] = new Array("Veggies", "88.625", "85.50", "85.81", "988")
    stock[2] = new Array("Colors", "88.625", "85.50", "85.81", "989")


            //TABLE COLUMNS
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);
            for (i = 0; i < heading.length; i++) {
                var th = document.createElement('TH')
                th.width = '75';
                th.appendChild(document.createTextNode(heading[i]));
                tr.appendChild(th);

            }

            for (i = 0; i < stock.length; i++) {
    			var tr = document.createElement('TR');
    			for (j = 0; j < stock[i].length; j++) {
        			var td = document.createElement('TD')
        			td.appendChild(document.createTextNode(stock[i][j]));
        			tr.appendChild(td)
    			}
    			tableBody.appendChild(tr);
			}

            myTableDiv.appendChild(table)

        }
}
