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

  console.log(`the following user joined the team: ${user.id}`);
  slackWebClient.chat.postMessage({
      channel: user.id,
      text: msgs.JOIN_TEAM_WELCOME_MESSAGE(user.real_name),
      link_names: true
    }).then((result) => {
      console.log('Message sent: ', JSON.stringify(result));
    })
    .catch(console.error);
});

slackEvents.on('member_joined_channel', event => {
  console.log(`member ${event.user} joined ${event.channel}`);

  var msg = msgs.getMessage(event.team, event.channel);
  if (!msg) {
    console.log(`joins to ${event.channel} in team ${event.team} don't get a message`);
    return;
  }

  slackWebClient.chat.postEphemeral({
      channel: event.channel,
      user: event.user,
      text: msg,
      link_names: true
    }).then((result) => {
      console.log('Message sent: ', JSON.stringify(result));
    })
    .catch(console.error);
});

// TODO(jrozier): it doesn't look like Slack sends these messages even if
//     I subscribe to them; figure out why...
/**
 * Someone mentioned this bot in a message.  We don't currently understand any
 * special commands, so we just respond with the welcome message.
 */
slackEvents.on('app_mention', event => {
  let {
    user
  } = event;

  console.log(`the following user sent a message to this bot: ${user}`);
  slackWebClient.chat.postMessage({
      channel: user,
      text: msgs.NO_SPECIAL_COMMANDS_MESSAGE() + msgs.JOIN_TEAM_WELCOME_MESSAGE()
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
