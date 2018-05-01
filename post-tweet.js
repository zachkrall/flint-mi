if( !process.env.production ){
    require('dotenv').config();
}
const twitter = require('twitter');
const moment = require('moment');

var client = new twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var tweet = "Flint, Michigan still doesn't have clean water."

var today = moment().format('dddd');

if ( today === 'Tuesday' ){
    client.post('statuses/update', {status: tweet},  function(error, tweet, response) {
      if(error){
          console.log('Today is...' + today);
          throw error
      };
      console.log(tweet);  // Tweet body.
      console.log(response);  // Raw response object.
    });
} else {
    console.log('Today is not Tuesday. It is ' + today );
}
