import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // in days/weeks/months
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  is_active: { type: Boolean, default: true },
}, { timestamps: true });

export const courseModel = mongoose.model('Course', courseSchema);
