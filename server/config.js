import dotenv from 'dotenv'
dotenv.config()

export const MONGODB_URI_PASSWORD = process.env.MONGODB_URI_PASSWORD || "mongodb://localhost/db"
export const PORT = process.env.PORT || 3000