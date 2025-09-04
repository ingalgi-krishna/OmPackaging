import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Connection Error');
}

interface GlobalMongoose {
    conn: Connection | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    var mongoose: GlobalMongoose | undefined;
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB(): Promise<Connection> {
    if (cached!.conn) {
        return cached!.conn;
    }

    if (!cached!.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached!.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
            console.log('MongoDB connected successfully');
            return mongoose;
        });
    }

    try {
        const mongooseInstance = await cached!.promise;
        cached!.conn = mongooseInstance.connection;
    } catch (e) {
        cached!.promise = null;
        console.error('MongoDB connection failed:', e);
        throw e;
    }

    return cached!.conn;
}

export default connectDB;