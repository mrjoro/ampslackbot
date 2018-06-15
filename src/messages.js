'use strict'

const CHANNEL_USING_AMP = '#CB7NKQ6G0';
const CHANNEL_CONTRIBUTING = '#CB8DNLZ42';
const CHANNEL_WELCOME_CONTRIBUTORS = '#CB9F3NK8X';

const WELCOME_MESSAGES = {
  GLOBAL: (name) =>
      `*Welcome to the AMP Slack${name ? ' ' + name : ''}!*\n\nThe AMP Slack is a place for the entire AMP community to come together, including people using AMP to develop their sites and those who are contributing to the AMP open source project.\n\nTo get the most out of this community please join the channel(s) that fit your needs:\n\n• If you have *questions about using AMP* please join the <${CHANNEL_USING_AMP}|#using-amp> channel.\n\n• If you're *contributing to the AMP open source project*, join the <${CHANNEL_CONTRIBUTING}|#contributing> channel. Also stop by the <${CHANNEL_WELCOME_CONTRIBUTORS}|#welcome-contributors> channel to say hi or to ask any question about contributing--no matter how basic it seems.\n\n• There are many other channels available; just click **Channels** in the sidebar to find the ones that interest you.\n\nJoin as many channels as you'd like, though please remember to only post a given question in one channel!`
};

exports.WELCOME_MESSAGES = WELCOME_MESSAGES;
