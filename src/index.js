// Use dotenv to read the local .env file during development
// (otherwise the process.env comes from the process running
// this, e.g. Heroku config vars)
const dotenv = require('dotenv')
const ENV = process.env.NODE_ENV || 'development'
if (ENV === 'development') dotenv.load()

const {WebClient} = require('@slack/client');
const slackWebClient = new WebClient(process.env.SLACK_BOT_OAUTH_TOKEN);

const createSlackEventAdapter = require('@slack/events-api').createSlackEventAdapter;
const slackEvents = createSlackEventAdapter(process.env.SLACK_VERIFICATION_TOKEN);
const port = process.env.PORT || 3000;

slackEvents.on('reaction_added', event => {
  let {type, user, item} = event;

  console.log(`a reaction was added by ${user}: ${JSON.stringify(item)}`);

  // See: https://api.slack.com/methods/chat.postMessage
  slackWebClient.chat.postMessage({ channel: user, text: 'Nice reaction!' })
    .then((res) => {
      // `res` contains information about the posted message
      console.log('Message sent: ', res.ts);
    })
    .catch(console.error);
});

slackEvents.on('team_join', event => {
  let {type, user} = event;

  console.log(`the following user joined the team: ${JSON.stringify(user)}`);

  // See: https://api.slack.com/methods/chat.postMessage
  slackWebClient.chat.postMessage({ channel: user.id, text: 'Welcome to the AMP Slack!  Join the #using-amp channel to ask questions about using AMP.' })
    .then((res) => {
      // `res` contains information about the posted message
      console.log('Message sent: ', res.ts);
    })
    .catch(console.error);
});

slackEvents.on('member_joined_channel', event => {
  let {type, user, channel} = event;

  console.log(`member ${user} joined ${channel})`);
});

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);

// Start a basic HTTP server
slackEvents.start(port).then(() => {
  console.log(`server listening for events on port ${port} at /slack/events`);
});
