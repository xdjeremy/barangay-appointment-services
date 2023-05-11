import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGO_URI as string;
const MONGODB_URI = 'mongodb+srv://franjeremy:WHIoGWVYxzaZF1jR@barangay-appointment-se.vecbiix.mongodb.net/?retryWrites=true&w=majority';

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// @ts-ignore
let cached = global.mongoose

if (!cached) {
    // @ts-ignore
    cached = global.mongoose = {conn: null, promise: null}
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise
    } catch (e) {
        cached.promise = null
        throw e
    }

    return cached.conn
}

export {dbConnect}