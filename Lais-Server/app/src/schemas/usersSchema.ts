import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema({
  id: String,
  name: String,
  password: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

export default usersSchema;
