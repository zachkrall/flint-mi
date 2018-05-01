import twitter
from local_settings import *


tweet_text = "Flint, Michigan still doesn't have clean water."


def connect():
    api = twitter.Api( consumer_key=MY_CONSUMER_KEY,
                       consumer_secret=MY_CONSUMER_SECRET,
                       access_token_key=MY_ACCESS_TOKEN_KEY,
                       access_token_secret=MY_ACCESS_TOKEN_SECRET )
    return api


if DEBUG == False:
    status = api.PostUpdate(tweet_text)
    print status.text.encode('utf-8')
else
    print tweet_text
