let handler = async (m, { conn }) => {
    conn.reply(m.chat, `
*STICKERS CONFIGURADOS*
\`\`\`
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(Sí) ${key}` : key} : ${value.text}`).join('\n')}
\`\`\`
`.trim(), null, {
        mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    })
}


handler.help = ['listcmd']
handler.tags = ['database']
handler.command = ['listcmd']

export default handler
