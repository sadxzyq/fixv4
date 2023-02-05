
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zacros.my.id/asupan/malaysia'
	conn.sendButton(m.chat, 'Nih', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(malaysia)$/i
handler.tags = ['asupan', 'kabul']
handler.help = ['malaysia']
handler.limit = false
export default handler

