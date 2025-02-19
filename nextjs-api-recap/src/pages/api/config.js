import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'config/read.json')

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    res.status(200).json(JSON.parse(fileContent))
  } catch (err) {
    res.status(500).json({ error: 'ファイルの読み込みに失敗しました', msg: err.message })
  }
}
