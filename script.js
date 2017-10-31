var userToFollow = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger",
    "noobs2ninjas","beohoff", "medrybw"];
var someURL = 'https://api.twitch.tv/kraken/streams/';
var userURL = "http://www.twitch.tv/";
var user;
var myarr;
var myvar;

function showStream() {
    for (var i=1; i<=userToFollow.length - 1; i++) {
        user = userToFollow[i];
        console.log("The user is: " + user);
        $.ajax({
            type: "GET",
            crossDomain: true,
            dataType: 'jsonp',
            url: someURL + user,
            success: function (data) {
                myarr = data._links.channel.split("/");
                myvar = myarr[5];
                if (data.stream === null) {
                    $("#userbox").append('<h2>Sorry, ' + myvar + ' is not streaming right now</h2>');
                    $("#userbox").append("<p>The user's <a href=" + userURL + myvar +'>' + 'channel' +'</a></p>');
                } else {
                    $("#userbox").append('<h2>'+ myvar  +' is streaming now on his <a href=' +  data.stream.channel.url +'>'
                        + 'channel' +'</a>' + ' about ' + data.stream.channel.status + '</h2>');
                    $("#userbox").append( '<img width="100" height="100" src=' + data.stream.channel.logo + '/>' );
                }
            }
        });
    }
}
showStream();

//{"_links":{"self":"https://api.twitch.tv/kraken/streams/terakilobyte","channel":"https://api.twitch.tv/kraken/channels/terakilobyte"},"stream":null}