import prisma from "@/global/prismaClient";
import { T_DbTablesNameObj } from "@/types/T_DbTablesNameObj";
// import { MongoClient } from "mongodb";
// import { cacheData, getCachedData } from "./cacheData";
require('dotenv').config();

type T_DbQuery = {
    [key: string]: any
}

class ManageDBTable {
    dbTable: T_DbTablesNameObj;

    constructor(dbTable: T_DbTablesNameObj) {
        this.dbTable = dbTable;
    }

    async findMany<T>(
        query: T_DbQuery, 
        select: { [key in keyof T]?: true } = undefined
    ): Promise<any[]> {
        return await prisma?.[this.dbTable].findMany({
            where: query,
            select
        });
    }
    async insertOne<T>(data: T) {
        return await prisma?.[this.dbTable].create({
            data
        });
    }
    async deleteOne(query: T_DbQuery) {
        return await prisma?.[this.dbTable].delete({
            where: query
        });
    }
    async updateOne(query: T_DbQuery, data: any) {
        return await prisma?.[this.dbTable].update({
            where: query,
            data
        });
    }
    closeDB() {
        prisma.$disconnect();
    }
}

export default ManageDBTable;