import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async (req,res) => {

    const {email, password} = req.body;

    try {
        const existinguser = await User.findOne({email});
        console.log(postMessage);

        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const signup = async (req,res) => {
    try {
        const postMessage = await PostMessage.find();
        console.log(postMessage);

        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}