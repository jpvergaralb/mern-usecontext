import dotenv from 'dotenv'
dotenv.config()

export const MONGODB_URI_PASSWORD = process.env.MONGODB_URI_PASSWORD || "mongodb://localhost/db"
export const PORT = process.env.PORT || 3000
export const CLOUNDARY_CLOUD_NAME = process.env.CLOUNDARY_CLOUD_NAME
export const CLOUNDARY_API_KEY = process.env.CLOUNDARY_API_KEY
export const CLOUNDARY_API_SECRET = process.env.CLOUNDARY_API_SECRET