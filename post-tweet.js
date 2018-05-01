const twitter = require('twitter');
const moment = require('moment');

var client = new twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
}

// April 25, 2014
var start = moment([2014, 4, 25]);
var today = moment();
var dayOfWeek = moment().format('dddd');

var since = numberWithCommas( today.diff(start, 'days') );

var text = "Flint, Michigan hasn't had clean water for " + since + " days.";

if ( dayOfWeek === 'Tuesday' ){
        
    // client.post('statuses/update', {status: text},  function(error, tweet, response) {
    //   if(error) throw error;
    //   console.log(tweet);
    //   console.log(response);
    // });
    
    console.log(text);
    
} else {
    
    console.log('Today is not Tuesday.');

}
