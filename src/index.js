// Initialize using verification token from environment variables
const dotenv = require('dotenv')
const ENV = process.env.NODE_ENV || 'development'
if (ENV === 'development') dotenv.load()

const createSlackEventAdapter = require('@slack/events-api').createSlackEventAdapter;
const slackEvents = createSlackEventAdapter(process.env.SLACK_VERIFICATION_TOKEN);
const port = process.env.PORT || 3000;

// Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
slackEvents.on('message', (event) => {
  console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
});

slackEvents.on('reaction_added', event => {
  let {type, user, item} = event;

  console.log(`a reaction was added by ${user}: ${JSON.stringify(item)}`);
});

slackEvents.on('member_joined_channel', event => {
  let {type, user, channel} = event;

  console.log(`member ${user} joined ${channel})`);
});

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);

// Start a basic HTTP server
slackEvents.start(port).then(() => {
  console.log(`server listening for events on port ${port}`);
});

/*
let slack = ts.instance(
  { token: TOKEN });

slack.on('reaction_added', payload => {
  let {type, user, item} = payload.event;

  console.log(`a reaction was added by ${user}: ${JSON.stringify(item)}`);
});

slack.on('team_join', payload => {
  let {type, user} = payload.event;

  console.log(`the following user joined the team: ${JSON.stringify(user)})`);
});

slack.on('member_joined_channel', payload => {
  let {type, user, channel} = payload.event;

  console.log(`member ${user} joined ${channel})`);
});


// incoming http requests
slack.listen(PORT);
*/
