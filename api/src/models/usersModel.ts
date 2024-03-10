import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const usersModel = pgTable('users', {
    usr_id: serial('usr_id').primaryKey().notNull(),
    usr_password: varchar('usr_password', { length: 32 }).notNull(),
    usr_name: varchar('usr_name', { length: 256 }).notNull(),
    usr_email: varchar('usr_email', { length: 256 }).notNull().unique(),
});
