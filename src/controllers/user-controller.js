
const UserService = require('../services/user-service');
const userService = new UserService();

const create = async (req,res) =>{
    try {
        const response = await userService.create({
            email:req.body.email,
            password:req.body.password
        });
        return res.status(201).json({
            success:true,
            message:'successfully created the a new user',
            data:response,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
            data: {},
            success: false,
            err: error.description
        })
    }
}

const signin = async (req,res) =>{
    try {
        const response = await userService.signin(req.body.email,req.body.password);
        return res.status(201).json({
            success:true,
            message:'successfully created the a new user',
            data:response,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"something went wrong",
            data:{},
            success: false,
            err:error,
        })
    }
}

const isAuthenticated = async (req,res) =>{
    try {
        
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        console.log(response)
        return res.status(201).json({
            success:true,
            message:'user is Authenticated and token is valid',
            data:response,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"something went wrong",
            data:{},
            success: false,
            err:error,
        })
    }
}

const isAdmin = async (req,res) => {
    try {
        const response = await userService.isAdmin(req.body.id);
        return res.status(201).json({
            success:true,
            message:'Successfully fetched whether user is Admin or not',
            data:response,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"something went wrong",
            data:{},
            success: false,
            err:error,
        })
    }
}

module.exports ={
    create,
    signin,
    isAuthenticated,
    isAdmin,
}