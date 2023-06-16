import mongoose from 'mongoose';

async function connectToDatabase() {
  const mongoUri = 'mongodb://root:example@db:27017';
  try {
    await mongoose.connect(mongoUri);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

connectToDatabase();
