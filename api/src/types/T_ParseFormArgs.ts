import { T_UploadDirPath } from "./T_UploadDirPath.js";

type T_ExpectedMimeTypes = (
    `image/${string}` |
    `video/${string}` |
    `application/${string}`
)
export interface T_ParseFormArgs {
    fileName?: string;
    maxFileSize?: number;
    uploadPath: T_UploadDirPath;
    expectedMimeTypes: T_ExpectedMimeTypes[];
}