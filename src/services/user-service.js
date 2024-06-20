const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {JWT_KEY} = require('../config/serverConfig');
 

class UserService {

    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user =  await this.userRepository.create(data);
            return user;
        } catch (error) {
            if(error.name == 'SequelizeValidationError'){
                throw error;
            }
            console.log("Something went wrong on service layer");
            throw error;
        }
    }

    async signin(email,plainPassword){
        try {
            // step-1 fetch the user using the email
            const user = await this.userRepository.getByEmail(email);
            // step-2 comapre incoming password and with store encrypted password
            const passwordMatch = await this.checkPassword(plainPassword,user.password);

            if(!passwordMatch){
                console.log('Password does not match');
                throw {error:'Incorrect password'};
            }
            // step-3 If password match generate the token
            const jwt =  this.createToken({email:email,id:user.id})
            return jwt;

        } catch (error) {
            console.log("Something went wrong in signin process");
            throw error;
        }
    }

    async isAuthenticated(token){
        try {
            const  response  =   this.verifyToken(token);
            if(!response){
                throw {error:'Invalid Token'};
            }
            const user = await this.userRepository.getById(response.id);
           
            if(!user){
                throw {error:'No user with the corresponding token exist'};
            }
            return user.id;
        } catch (error) {
            console.log("Something went wrong in the token creation");
            throw error;
        }
    }

     

    createToken (user){
        try {
            var token = jwt.sign(user,JWT_KEY, { expiresIn: '1d' });
            return token
        } catch (error) {
            console.log("Something went wrong in the token creation");
            throw error;
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in the token validation");
            throw error;
        }
    }

    checkPassword(userInputPlainPassword ,encryptedPassword){
        try {
            return bcrypt.compare(userInputPlainPassword,encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in the password comparison");
            throw error;
        }
    }

    async isAdmin(userId){
        try {
            return await this.userRepository.isAdmin(userId);
        } catch (error) {
            console.log("Something went wrong in the password comparison");
            throw error;
        }
    }


}



module.exports =  UserService;