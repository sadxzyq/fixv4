import fs from 'fs'
 let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
/*} = (await import("@adiwajshing/baileys")).default;*/
} = (await import('@adiwajshing/baileys')).default
 const anu = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999,
                            itemCoun : 404,
                            surface : 404,
                            message: '𝙰 𝚛 𝚊 - 𝙰 𝚛 𝚊',
                            orderTitle: 'B',
                            thumbnail: fs.readFileSync('./thumbnail.jpg'), 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
conn.sendMessage(m.chat,{text:wm}, {quoted: anu})
}

handler.tags = ['nocategory']
handler.help = ['troli']
handler.command = /^troli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false

export default handler
