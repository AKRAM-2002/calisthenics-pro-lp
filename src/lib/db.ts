import mongoose, { Mongoose } from "mongoose";

interface MongooseConn {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

const DB_URL = process.env.MONGODB_URL;

if (!DB_URL) {
    throw new Error("MONGODB_URL environment variable is not defined");
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = {
        conn: null,
        promise: null
    };
}

export const connect = async () => {
    if (cached.conn) return cached.conn;

    cached.promise = cached.promise || 
        mongoose.connect(DB_URL, {  // Use DB_URL here instead of MONGODB_URL
            dbName: 'CALIPRO',
            bufferCommands: false,
            connectTimeoutMS: 30000
        });

    cached.conn = await cached.promise;
        
    return cached.conn;
}
