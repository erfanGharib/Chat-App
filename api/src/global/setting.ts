import path from 'path';
import { env } from 'process';

const isDevelopment = env.NODE_ENV === 'development';
const setting = {
    isDevelopment,
    uploadsDir: path.join(process.cwd(), 'uploads'),
    origin: `http://${isDevelopment ? env.LOCAL_CLIENT_DOMAIN + ':3000' : env.LOCAL_CLIENT_DOMAIN}`,
}

export default setting;