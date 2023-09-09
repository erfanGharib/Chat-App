import { baseUploadDir } from "@/global/baseUploadDir";
import { T_UploadDirPath } from "@/types/T_UploadDirPath";
import { NextApiRequest, NextApiResponse } from "next";
const formidable = require('formidable');

interface T_ParseFormArgs {
    res: NextApiResponse;
    req: NextApiRequest,
    fileName?: string;
    uploadDir: T_UploadDirPath;
    maxFileSize?: number;
    expectedMimeTypes: string[];
}

// files include files data
const createFilesLinks = (path: T_UploadDirPath, files: Object): Object => {
    let filesLinks = {};

    Object.entries(files).forEach(([ property, value ]: [ string, any ]) => {
        filesLinks[property] = `/api/uploads${path}/${value?.newFilename}`;
    })

    return filesLinks;
}

const convertDataTypes = (object: { [key: string]: any }) => {
    // let _object = {...object};
    Object.entries(object).forEach(([name, v]: [string, string]) => {
        /**
         * all data in frontend convert to string
         * and we have some non-string values (e.g boolean)
         * this code reconize that the string include ("true" | "false" | "123") or not
         * and convert them to the target data type
         */

        // "123": true , "f123": false
        const IS_NUMBER = /^[0-9]+$/.test(v);
        // "false": true , "something": false
        const IS_BOOL = /^(true|false)$/i.test(v);

        if(IS_BOOL) object[name] = v.toLowerCase() === 'true';
        else if(IS_NUMBER) object[name] = parseInt(v);
        else object[name] = v;
    });

    return object;
}

const parseForm = async ({
    fileName = null,
    uploadDir,
    res,
    req,
    maxFileSize = 1 * 1_000 * 3_000,
    expectedMimeTypes = [],
}: T_ParseFormArgs): Promise<any> => {
    const form = formidable({
        uploadDir: `${baseUploadDir}/${uploadDir}`,
        maxFileSize,
        keepExtensions: true,
        multiples: true,
        filename: (
            fileName ? 
                (name, ext): string => {
                    if(fileName === null)
                        return name + ext;
                    else if(fileName.match(/\w+\.\w+/))
                        return fileName;
                    else
                        throw new Error(`fileName format is not expected ${fileName}`);
                } : 
                undefined
        ),
        filter: ({ mimetype }): boolean => {
            if(expectedMimeTypes.some(type => type === mimetype)) {
                return true;
            }
            else {
                res
                .status(415)
                .send(`Only ${expectedMimeTypes.map(type => type.match(/\w+$/)?.[0]).join(' ')} formats are allowed!`);
                return false;
            }
        },
    });

    return new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            if (err) {
                res.status(err?.httpCode).send({
                    message: 'Unable to parse form',
                });
                reject('Unable to parse form')
            }

            resolve({
                ...createFilesLinks(uploadDir, files),
                ...convertDataTypes(fields)
            })
        })
    })
}
export default parseForm;