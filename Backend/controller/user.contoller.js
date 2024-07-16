import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"; // to secure password or visible items 

// signup controller
export const signup = async ( req,res ) => {

    try {
        const { fullname, email,password} = req.body; //to call data from body
        const user = await User.findOne({email})  // to check is user present or not through email id.
        if(user){
            return res.status(400).json({message:"user is already present"})

        }

        const hashPassword = await bcryptjs.hash(password,10) // to secure your password , value 10 gives strong security.
        // if user is not presnt then allow user to create data.
        const createdUser = new User({
            fullname : fullname,
            email : email,
            password: hashPassword,
        })
        await createdUser.save()  // for storing data in User
        res.status(201).json({message:"user created successfully",user:{
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email
        },
    })
    } catch (error) {
        console.log("Error:"+error.message)
        res.status(500).json({message:"Internal server error"})
        
    }
};
// login controller
export const login = async (req,res) => {    
    try {
        const {email , password} =req.body;
        const user = await User.findOne({email}); //find the user with email id
        const isMatch =await bcryptjs.compare(password, user.password)  // comparing the password with user and store password
        if(!user || isMatch){               //not matching with user show this error
            return res.status(400).json({message:"Invalid username or password"});

        } else{        // matching then provide details
            res.status(200).json({
                message:"login successfully", 
                user:{
                    _id: user._id,
                    fullname:user.fullname,
                    email:user.email

            }});
         
        }

    } catch (error) {
        console.log("Error",error.message);
        res.status(500).json({message:"Internal server error"});
    }
}