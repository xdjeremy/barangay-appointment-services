import {User} from "@/models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getConfig from "next/config";

const {serverRuntimeConfig} = getConfig();

const authenticate = async ({
                                username,
                                password,
                            }: {
    username: string;
    password: string;
}) => {
    const user = await User.findOne({username: username});

    if (!(user && bcrypt.compareSync(password, user.password))) {
        return {
            success: false,
            message: 'Username or password is incorrect'
        }
    }

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({sub: user.id}, serverRuntimeConfig.secret, {
        expiresIn: "7d",
    });

    return {
        success: true,
        ...user.toJSON(),
        token,
    };
};

const create = async (params: {
    name: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}) => {
    // validate
    if (await User.findOne({username: params.username})) {
        throw {
            success: false,
            message: 'Username "' + params.username + '" is already taken'
        }
    }

    // check if password is same as confirm password
    if (params.password !== params.confirmPassword) {
        throw {
            success: false,
            message: 'Password and confirm password does not match'
        };
    }

    console.log(params);

    const user = new User(params);

    // hash password
    if (params.password) {
        user.password = bcrypt.hashSync(params.password, 10);
    }

    // save user
    await user.save();
};

const getUserById = async (id: string) => {
    if (!id) {
        throw new Error('User not found');
    }

    const user = await User.findOne({
        id
    })

    return {
        success: true,
        data: user
    }
}

export const usersRepo = {authenticate, create, getUserById};
