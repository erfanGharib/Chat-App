import path from 'path';
import { env } from 'process';

const isDevelopment = env.NODE_ENV === 'development';
const setting = {
    BEARER_KEYWORD: 'Bearer',
    isDevelopment,
    uploadsDir: path.join(process.cwd(), 'uploads'),
    origin: isDevelopment ? env.LOCAL_CLIENT_URL : env.REMOTE_CLIENT_URL,
}

export default setting;