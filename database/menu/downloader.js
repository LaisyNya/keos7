const downloader = (prefix, botName, ownerName) => {
	return `
「 *BOT_NAME* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: OWNER_NAME
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
}
exports.downloader = downloader
