import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please Enter your Name.'],
      maxlength: [30, "Name cannot be more than 60 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide the  Email"],
      maxlength: [50, "Email cannot be more than 50 characters"],
    },

    message: {
      type: String,
      maxlength: [1000, "Message cannot be more than 1000 characters"],
    },
  },
  { timestamps: true }
);
export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
