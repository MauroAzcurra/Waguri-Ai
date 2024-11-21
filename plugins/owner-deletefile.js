import { tmpdir } from 'os'
import path from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs'

let handler = async (m, { conn, usedPrefix: _p, __dirname, args, text }) => {
if (global.conn.user.jid !== conn.user.jid) {
return conn.reply(m.chat, '✦ Comando no disponible para subbots', m )
}
    if (!text) return conn.reply(m.chat, `✧ Ingresa la ruta y el nombre del archivo que deseas eliminar.`, m)
    
    const file = text.trim()
    if (!existsSync(file)) return conn.reply(m.chat, `✧ Archivo no encontrado.`, m)
    
    unlinkSync(file)
    conn.reply(m.chat, `✧ El archivo *${file}* ha sido eliminado con éxito.`, m)
}
handler.tags = ['owner']
handler.help = ['deletefile']
handler.command = /^(deletefile|df)$/i
handler.rowner = true

export default handler