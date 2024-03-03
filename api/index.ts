/** @ENTRY_POINT */

import { config } from 'dotenv';
import path from "path";

config({ path:path.join(process.cwd(), '.env') });

import('./src/main.js');