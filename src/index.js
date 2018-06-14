const ts = require('tinyspeck');
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.TOKEN;

let slack = ts.instance(/*{ token: TOKEN }*/);

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
