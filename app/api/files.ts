import { BlitzApiRequest, BlitzApiResponse } from "blitz"
import fs from "fs"
import path from "path"

export default function download(req: BlitzApiRequest, res: BlitzApiResponse) {
  res.statusCode = 200

  const file = path.join(process.cwd(), "README.md")
  const stream = fs.readFileSync(file)

  res.setHeader("Content-disposition", `attachment; filename=readme.md`)
  res.send(stream)
  res.end()
}
