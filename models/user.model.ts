import {model, models, Schema} from "mongoose";

interface IUser {
    username: string;
    password: string;
    email: string;
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
})

const User = models.User || model<IUser>('User', userSchema);

export {User};