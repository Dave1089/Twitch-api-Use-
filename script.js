// Initialized Array of streamers 
twitchStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
streamerLink = [];
streamerIcon = [];
streamerTitle = [];
streamerName = [];
//Getting Json 

for(var i=0;i<twitchStreamers.length;i++){
  var stream = $(this).html();
 $.getJSON('https://api.twitch.tv/kraken/streams/'+twitchStreamers[i]+'?callback=?', function(data) {
   
//var streamIcon =     ;   
   $('#ulFill').append('<li></li>');
   
    });

}

$('.streamTab').on('click',function(){
  $('.active').removeClass('active');
  $(this).addClass('active');

});