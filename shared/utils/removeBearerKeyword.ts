import { sharedConfigs } from "../sharedConfigs";

export const removeBearerKeyword = (token: string) =>  {
    return token?.replace(sharedConfigs.BEARER_KEYWORD + ' ', '');
}