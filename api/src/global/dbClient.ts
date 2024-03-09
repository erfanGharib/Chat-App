import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from 'process';

export const dbClient = () => {
    const dbUri = `postgres://${env.DB_USER}:${env.DB_PASSWORD}@0.0.0.0:5432/${env.DB_NAME}`;
    
    if(dbUri.toLowerCase().includes('undefined')) {
        throw Error('invalid `dbUri`: ' + dbUri);
    }

    return (
        drizzle(
            postgres(
                dbUri, 
                { max: 1 }
            )
        )
    );
}
