'use strict'

// Use dotenv to read the local .env file during development
// (otherwise the process.env comes from the process running
// this, e.g. Heroku config vars)
const dotenv = require('dotenv')
const ENV = process.env.NODE_ENV || 'development'
if (ENV === 'development') dotenv.load()

const {
  WebClient
} = require('@slack/client');
const slackWebClient = new WebClient(process.env.SLACK_BOT_OAUTH_TOKEN);

const createSlackEventAdapter = require('@slack/events-api').createSlackEventAdapter;
const slackEvents = createSlackEventAdapter(process.env.SLACK_VERIFICATION_TOKEN);
const port = process.env.PORT || 3000;

const msgs = require('./messages')

slackEvents.on('team_join', event => {
  let {
    user
  } = event;

  console.log(`the following user joined the team: ${JSON.stringify(user)}`);

  slackWebClient.chat.postEphemeral({
      channel: '#announcements',
      user: user.id,
      text: msgs.JOIN_TEAM_WELCOME_MESSAGE(user.real_name)
    }).then((result) => {
      console.log('Message sent: ', JSON.stringify(result));
    })
    .catch(console.error);
});

slackEvents.on('member_joined_channel', event => {
  console.log(`member ${event.user} joined ${event.channel}`);

  var msgFunc = msgs.CHANNEL_WELCOME_MESSAGES[event.channel];
  if (!msgFunc) {
    console.log(`joins to ${event.channel} don't get a message`);
    return;
  }

  slackWebClient.chat.postEphemeral({
      channel: event.channel,
      user: event.user,
      text: msgFunc()
    }).then((result) => {
      console.log('Message sent: ', JSON.stringify(result));
    })
    .catch(console.error);


});

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);

// start a basic server to listen for events (by default this listens) for
// events at /slack/events
slackEvents.start(port).then(() => {
  console.log(`server listening for events on port ${port} at /slack/events`);
});
