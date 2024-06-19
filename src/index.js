const express = require('express');
const bodyParser = require('body-parser')

const {PORT} =  require('./config/serverConfig')
const apiRoutes = require('./routes/index');
const  app = express();
// const  db = require('./models/index');

const {User,Role} = require('./models/index');



const prepareAndStartServer = () =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);

    app.listen(PORT,async () =>{
        console.log(`Server started on Port:${PORT}`);
        
        // if(process.env.DB_SYNC){
        //     db.sequelize.sync({alter:true});
        // }
        const u1 = await User.findByPk(5);
        const r1 = await Role.findByPk(2);
        // u1.addRole(r1);
        // r1.addRole(u1);
         r1.addUser(u1); 


    })
}

prepareAndStartServer();