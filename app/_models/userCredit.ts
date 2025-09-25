import mongoose, { Schema, Document } from "mongoose";

export interface IUserCredit extends Document {
  email: string;
  wordCredits: number;
  usedWords: number;
}

const UserCreditSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    wordCredits: { type: Number, default: 100000 },
    usedWords: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.UserCredit ||
  mongoose.model<IUserCredit>("UserCredit", UserCreditSchema);
