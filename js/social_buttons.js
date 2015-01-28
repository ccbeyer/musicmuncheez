// twitter follow button
window.twttr=
(function(d,s,id) {
	var js,fjs=d.getElementsByTagName(s)[0], t=window.twttr || {};
	if (d.getElementById(id)) return;
	js=d.createElement(s); js.id=id;
	js.src="https://platform.twitter.com/widgets.js";
	fjs.parentNode.insertBefore(js,fjs);
	t._e=[]; 
	t.ready= function(f) {
		t._e.push(f);
	};
	return t;
} (document,"script","twitter-wjs"));

// facebook like button
(function(d, s, id) {
  	var js, fjs = d.getElementsByTagName(s)[0];
  	if (d.getElementById(id)) return;
  	js = d.createElement(s); js.id = id;
  	js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&appId=802153996523810&version=v2.0";
  	fjs.parentNode.insertBefore(js, fjs);
} (document, 'script', 'facebook-jssdk'));

// soundcloud buttons
var BASE_URL = "file://localhost/Users/jackbeckwith/Dropbox/musicmuncheez";

// initialize soundcloud API with key and redirect URL
SC.initialize ({
  // This is the sample client_id. you should replace this with your own
  client_id: "df3379fc2e3635bd9ef4c36f110b5dce",
  redirect_uri: BASE_URL+"/callback.html",
});

//Follow on Soundcloud
function followSoundcloud (id) {
	SC.connect(function () {
  		SC.put('/me/followings/'+ id, function(status, error) {
  			if (error) {
  				alert("Error " + error)
  			} else {
      			alert("Following: " + id);
    		}
      });
  });
}