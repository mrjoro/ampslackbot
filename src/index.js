const ts = require('tinyspeck');
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.TOKEN;

let slack = ts.instance(/*{ token: TOKEN }*/);

// event handler
slack.on('team_joined', 'reaction_added', payload => {
  let {type, user, item} = payload.event;

  console.log(`event handler called ${type}, ${user}, ${item}`);
});


// incoming http requests
slack.listen(PORT);
