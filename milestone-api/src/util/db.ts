import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const port = process.env.DB_PORT || 27017
        const dbName = process.env.DB_NAME || 'milestone'

        const mongodbUrl = `mongodb://localhost/${dbName}?authSource=admin`

        await mongoose.connect(mongodbUrl as string, {
            user: 'milestone',
            pass: '123456'
        })
        console.log(`MongoDB connection success`)
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
}


export default connectDB