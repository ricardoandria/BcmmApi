import path from "path";
import {v4 as uuid} from "uuid";
import fs from "fs";
import mongoose from "mongoose";
const FILE_PATH = "./fileuploaded/";

const uploadFile = async (file) => {
    const file = mongoose.model("File");

    try {
        const {createReadStream,filename,mimetype} = await file.then(resultat => resultat)
        const fileExtension = path.extname(filename);
        const fileStream = createReadStream();
        var uniqueName = `${uuid()}${fileExtension}`

        if(!fs.existsSync(FILE_PATH)) {
            fs.mkdirSync(FILE_PATH);
        }

        fileStream.pipe(fs.createWriteStream(`${FILE_PATH}/${uniqueName}`))

        var mediaUpload = new File({
            filename,
            mimetype,
            fd:uniqueName
        }).save();

        const value = await mediaUpload;

        return mediaUpload;
    } catch (error) {
        throw new Error(error,"Erreur lors de l'upload du fichier")
    }
}

module.exports = uploadFile;
