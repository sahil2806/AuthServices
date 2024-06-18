const express = require('express');
const bodyParser = require('body-parser')

 const  {PORT} =  require('./config/serverConfig')
 const apiRoutes = require('./routes/index');
const app = express();

//  const {User} = require('./models/index');
//  const bcrypt = require('bcrypt');
// const service =  require('./services/user-service')
// const obj = new service();

const prepareAndStartServer = () =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);

    app.listen(PORT,async () =>{
        console.log(`Server started on Port:${PORT}`);
        // const   incomingpassword = '123456'
        // const   user = await User.findByPk(7);
        // const   response = bcrypt.compareSync(incomingpassword,user.password);
        // console.log(response);

        // const result = obj.createToken({email:'rahul@admin.com' , id:5});
        // console.log(result)
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaHVsQGFkbWluLmNvbSIsImlkIjo1LCJpYXQiOjE3MTg3MTM2NzksImV4cCI6MTcxODgwMDA3OX0.jNRK-mths37UdVXc4nAgmxV0eN5uheKE157TQv_YfkI';
        // const response = obj.verifyToken(token);
        // console.log(response);

    })
}

 
prepareAndStartServer();