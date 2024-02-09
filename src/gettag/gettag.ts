import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:gettag_command');

const gettag = () => async (ctx: Context) => {
  const message = `*极速云 *\n 订阅地址https://airsub.afosne.workers.dev/?token=afosne&fast`;
  debug(`Triggered "gettag" command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { gettag };
