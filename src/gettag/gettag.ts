import { Context } from 'telegraf';
import createDebug from 'debug';

import { name, tag } from './urls.json';

const debug = createDebug('bot:gettag_command');

const gettag = () => async (ctx: Context) => {
  const message = `*${name} ${tag}*\n 订阅地址https://airsub.afosne.workers.dev/?token=afosne&${tag}`;
  debug(`Triggered "gettag" command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { gettag };
