import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { JWT_EXPIRATION } from './../config.js';
import dotenv from "dotenv";
dotenv.config();

const postSignUp = async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Name is required",
                data: null
            });
        }

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
                data: null
            });
        }

        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required",
                data: null
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists",
                data: null
            });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            mobile,
            password: encryptedPassword,
        });

        const savedUser = await newUser.save();

        savedUser.password = undefined;

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: savedUser
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            data: null
        });
    }
};

const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
                data: null
            });
        }

        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required",
                data: null
            });
        }

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User does not exist",
                data: null
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
                data: null
            });
        }

        existingUser.password = undefined;

        const jwtToken = jwt.sign(
            {
                id: existingUser._id,
                email: existingUser.email,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: JWT_EXPIRATION
            }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: existingUser,
            jwtToken
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            data: null
        });
    }
};

export { postSignUp, postLogin }