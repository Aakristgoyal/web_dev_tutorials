import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\aakri\\OneDrive\\Pictures\\Screenshots"

let files = await fs.readdir(basepath)

for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        const extpath=path.join(basepath,ext)

        if (fsn.existsSync(extpath)) {
            // Move the file to this directory if its not a js or json file
            await fs.rename(path.join(basepath,item), path.join(extpath, item))
        }
        else {
            await fs.mkdir(extpath)
            await fs.rename(path.join(basepath,item), path.join(extpath, item))
        }
    }

}