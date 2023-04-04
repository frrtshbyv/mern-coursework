import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://dannymars999:dannymars999@cluster0.tvyq0za.mongodb.net/My_app?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
