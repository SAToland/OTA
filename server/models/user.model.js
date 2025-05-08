import {model, Schema} from 'mongoose';

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: [true, "Username is required!"],
            maxlength: [20, "Username can't be more than 20 characters long"]
        },
        password: {
            type: String,
            required: [true, "A password is required!"],
            minlength: [9, "Your password must be at least 9 characters long"]
        },
        confirmPassword: {
            type: String,
            required: [true, "Must confirm password!"]
        },
        email: {
            required: [true, "Email is required!"]
        },
        name: {
            type: String,
            required: [true, "Name is required!"]
        },
        age: {
            type: Integer,
            required: [true, "Age is required!"],
            min: [18, "You must be at least 18 Years old!"]
        },
        profilePictures: {
            type: Array
        },
        intrests: {
            type: Array
        }
    },
    {timestamps: true}
);
const User = model("User", UserSchema);
export default User;