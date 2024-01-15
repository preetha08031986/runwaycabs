import asynchandler from 'express-async-handler';
import User from '../models/user.js';
import generateToken from '../utils/generateToken.js';
//@dec  Auth user/set token
//route POST/api/users/auth
const authUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        console.log("user", user); // Log user to see if it's found

        if (user && (await user.matchPassword(password))) {
            generateToken(res, user._id);
            res.status(201).json({
                _id: user._id,
                name: user.name,
                password: user.password
            });
        } else {
            res.status(401);
            throw new Error('Invalid Email or password');
        }
    } catch (error) {
        console.error(error); // Log any errors that occur
        res.status(500).json({ message: 'Server Error' });
    }
};

// @dec  Register a new user
//route POST/api/users

const registerUser = asynchandler(async(req,res) => {
    const {name,email,password,mobile,role} = req.body;
   const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        mobile,
        role,
        password,
        confirmPassword,
    });

    if(user){
        generateToken(res,user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            mobile: user.mobile,
            role:user.role,
            password:user.password,
            confirmPassword:user.confirmPassword,
        });
    } else{
        res.status(400);
        throw new Error('Invalid user data')
    }
       
        });   
   
// @dec Logout user
//route POST/api/users/logout
const logoutUser = asynchandler(async(req,res) => {
    res.cookie('jwt', '' , {
        httpOnly: true,
        expires:new Date(0)
    })

    res.status(200).json({message:'User Logged Out'});
    });        

export {
    authUser,
    registerUser,
    logoutUser
};    