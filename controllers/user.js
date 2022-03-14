import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async (req,res) => {

    const {email, password} = req.body;

    try {
        const existinguser = await User.findOne({email});
        
        if (!existinguser) return res.status(404).json({message: "User does not exist"});

        const isPasswordCorrect = await bcrypt.compare(password, existinguser.password);

        if (!isPasswordCorrect) return res.status(400).json({message: "Invalid credential"});

        const token = jwt.sign({email: existinguser.email, id: existinguser._id}, 'test',{expiresIn: "1h"});

        return res.status(200).json({result: existinguser, token});
    } catch (error) {
        res.status(500).json({message: 'Something went wrong.'})
    }
}

export const signup = async (req,res) => {

    const {email, password, firstName, lastName} = req.body;

    try {
        const existinguser = await User.findOne({email});
        if (existinguser) return res.status(400).json({message: "User already exist"});

        //hashpassword 12 is the salt in the password
        const hashedPassword = await bcrypt.hash(password, 12);


        const result = new User({email,password: hashedPassword, name: `${firstName} ${lastName}`})

        const token = jwt.sign({email: result.email, id: result._id}, 'test',{expiresIn: "1h"});
        return res.status(200).json({result, token});
    } catch (error) {
        res.status(500).json({message: 'Something went wrong.'})
    }
}