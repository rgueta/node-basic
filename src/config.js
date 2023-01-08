export const PORT = process.env.PORT || 3000

export const DB_HEAD_URL = process.env.DB_HEAD_URL || 'mongodb'
export const DB_HOST = process.env.DB_HOST || 'localhost:27017'
export const DB_USER = process.env.DB_USER || 'bytheg'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'bytheg2021'
export const DB_NAME = process.env.DB_NAME || 'byh16'
export const DB_URL = `${DB_HEAD_URL}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`