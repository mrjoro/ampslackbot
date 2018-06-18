'use strict'

const CHANNEL_USING_AMP = 'CB7NKQ6G0';
const CHANNEL_CONTRIBUTING = 'CB8DNLZ42';
const CHANNEL_WELCOME_CONTRIBUTORS = 'CB9F3NK8X';
const CHANNEL_RELEASE = 'CB8N8NX4M'

const CHANNEL_WELCOME_MESSAGES = {
  [CHANNEL_USING_AMP]: () =>
    `*Welcome to the #using-amp channel!* :wave:\n\nUse this channel to ask questions about issues you face when using AMP on your site.\n\n*You may get a faster response to your questions on <https://stackoverflow.com/questions/tagged/amp-html|Stack Overflow>* since Stack Overflow is more actively monitored.  (It's also easier to find answers to common questions there.)\n\nPlease remember to only post a given question in a single channel.`,
  [CHANNEL_CONTRIBUTING]: () =>
     `*Welcome to the #contributing channel!* :wave:\n\nThis is the main channel for discussing topics relevant to the community working on the AMP open source project.  You can use this channel to ask questions you run into when adding new features or fixing bugs in AMP.\n\nSince you're contributing to the AMP open source project consider also joining the <#${CHANNEL_RELEASE}|release> channel to keep track of when new versions of AMP are pushed.\n\nYou may also want to join the <#${CHANNEL_WELCOME_CONTRIBUTORS}|welcome-contributors> channel, a place where people new to contributing to AMP and/or open source can ask questions--no matter how basic they seem.\n\n*Please ask questions about how to _use_ AMP on your site in the <#${CHANNEL_USING_AMP}|using-amp> channel instead of this one.*`,
  [CHANNEL_WELCOME_CONTRIBUTORS]: () =>
    `*Welcome to the #welcome-contributors channel!* :wave:\n\nThis channel is a welcoming place for new AMP contributors and people who are new to open source projects.\n\nFeel free to ask any questions you run into when adding new features or fixing bugs in the AMP open source project.\n\nYou may also want to join the main <#${CHANNEL_CONTRIBUTING}|contributing> channel.\n\nWhen you have a chance check out AMP's <https://github.com/ampproject/amphtml/blob/master/CONTRIBUTING.md#contributing-code|documentation on contributing> for more information on getting started contributing to AMP.`
};

const JOIN_TEAM_WELCOME_MESSAGE = (name) => `*Welcome to the AMP Slack${name ? ' ' + name : ''}!* :wave:\n\nThe AMP Slack is a place for the entire AMP community to come together, including people using AMP to develop their sites and those who are contributing to the AMP open source project.\n\nTo get the most out of this community please join the channel(s) that fit your needs:\n\n• If you have *questions about using AMP* you can ask them in the <#${CHANNEL_USING_AMP}|using-amp> channel.\n\n• If you're *contributing to the AMP open source project*, join the <#${CHANNEL_CONTRIBUTING}|contributing> channel. Also stop by the <#${CHANNEL_WELCOME_CONTRIBUTORS}|welcome-contributors> channel to say hi or to ask any questions about contributing--no matter how basic they seem.\n\n• There are many other channels available; just click *Channels* in the sidebar to find the ones that interest you.\n\nJoin as many channels as you'd like, though please remember to only post a given question in one channel!`

const NO_SPECIAL_COMMANDS_MESSAGE = () => `Thank you for sending me a message!  I don't understand any special commands yet, but here's the welcome message I normally send to new members of the AMP Slack:\n\n`

exports.JOIN_TEAM_WELCOME_MESSAGE = JOIN_TEAM_WELCOME_MESSAGE;
exports.CHANNEL_WELCOME_MESSAGES = CHANNEL_WELCOME_MESSAGES;
exports.NO_SPECIAL_COMMANDS_MESSAGE = NO_SPECIAL_COMMANDS_MESSAGE;
