'use strict'

const CHANNEL_USING_AMP = 'CB7NKQ6G0';
const CHANNEL_CONTRIBUTING = 'CB8DNLZ42';
const CHANNEL_WELCOME_CONTRIBUTORS = 'CB9F3NK8X';
const CHANNEL_RELEASE = 'CB8N8NX4M'

const CHANNEL_WELCOME_MESSAGES = {
  [CHANNEL_USING_AMP]: () =>
    `*Welcome to the #using-amp channel!* :wave:\n\nUse this channel to ask questions about issues you face when using AMP on your site.\n\n*Note that this channel is not as actively monitored as <https://stackoverflow.com/questions/tagged/amp-html|Stack Overflow> so you may find you'll receive a faster response there.  (It's also easier to find answers to common questions there.)\n\nPlease remember to only post a given question in a single channel.`,
  [CHANNEL_CONTRIBUTING]: () =>
     `*Welcome to the #contributing channel!* :wave:\n\nThis is the main channel for discussing topics relevant to the community working on the AMP open source project.  You can use this channel to ask questions you run into when adding new features or fixing bugs in the AMP open source project.\n\nSince you're contributing to the AMP open source project you may also want to join the <${CHANNEL_RELEASE}|release> channel to keep track of when new versions of AMP are pushed.\n\nThe <${CHANNEL_WELCOME_CONTRIBUTORS|welcome-contributors} is a channel where people new to contributing to AMP and/or open source can ask any question--no matter how basic it seems.\n\n*If you've got questions about how to use AMP on your site ask them in the <${CHANNEL_USING_AMP}|using-amp> channel.*`,
  [CHANNEL_WELCOME_CONTRIBUTORS]: () =>
    `*Welcome to the #welcome-contributors channel!* :wave:\n\nThis channel is meant to be a welcoming place for people who are new to contributing to the AMP open source project and/or open source.  Feel free to ask any questions you run into when adding new features or fixing bugs in the AMP open source project.\n\nYou may also want to join the main <${CHANNEL_CONTRIBUTING}|contributing> channel.\n\nIf you haven't already done so, check out AMP's <https://github.com/ampproject/amphtml/blob/master/CONTRIBUTING.md#contributing-code|documentation on contributing>.`
};

const JOIN_TEAM_WELCOME_MESSAGE = (name) => `*Welcome to the AMP Slack${name ? ' ' + name : ''}!* :wave:\n\nThe AMP Slack is a place for the entire AMP community to come together, including people using AMP to develop their sites and those who are contributing to the AMP open source project.\n\nTo get the most out of this community please join the channel(s) that fit your needs:\n\n• If you have *questions about using AMP* please join the <${CHANNEL_USING_AMP}|using-amp> channel.\n\n• If you're *contributing to the AMP open source project*, join the <${CHANNEL_CONTRIBUTING}|contributing> channel. Also stop by the <${CHANNEL_WELCOME_CONTRIBUTORS}|welcome-contributors> channel to say hi or to ask any question about contributing--no matter how basic it seems.\n\n• There are many other channels available; just click *Channels* in the sidebar to find the ones that interest you.\n\nJoin as many channels as you'd like, though please remember to only post a given question in one channel!`

exports.JOIN_TEAM_WELCOME_MESSAGE = JOIN_TEAM_WELCOME_MESSAGE;
exports.CHANNEL_WELCOME_MESSAGES = CHANNEL_WELCOME_MESSAGES;
