
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zacros.my.id/asupan/loli'
	conn.sendButton(m.chat, 'Nih', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(asupanloli1)$/i
handler.tags = ['asupan', 'kabul']
handler.help = ['asupanloli1']
handler.limit = false
export default handler
