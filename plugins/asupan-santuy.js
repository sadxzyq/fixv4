
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zacros.my.id/asupan/santuy'
	conn.sendButton(m.chat, 'Nih', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(santuy)$/i
handler.tags = ['asupan', 'kabul']
handler.help = ['santuy']
handler.limit = false
export default handler


