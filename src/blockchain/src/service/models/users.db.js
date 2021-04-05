import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    wallet: String,
    amount: String,
    creation: String,
  });
  
  export default mongoose.model("users", userSchema);