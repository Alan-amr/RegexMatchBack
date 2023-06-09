const {UserModel} = require('../models')
const { matchedData } = require('express-validator');
const {handlehttpError} = require('../utils/handlehttpError')

  const getAllUsers = async (req, res) => {
      try{
          const data = await UserModel.find();

          res.send( data );
      }catch(e)
      {
          handlehttpError(res,"ERROR_GET_ALL_USERS")
      }
      
  };

const getUserByUsernameAndPassword = async (req, res) => {
    const userName = req.params.userName;
    const password = req.params.password;
  
    try {
      const user = await UserModel.findOne({ userName: userName, password : password });
      console.log(user);
      res.send( user );
    } catch (e) {
      var message = e.message;
      res.send({ message });
    }
  };

const createUser = async (req, res) => {
    try{
        const body = matchedData(req);
        const data = await UserModel.create(body);
        res.send(data);
    }catch(e)
    {
        handlehttpError(res,"ERROR_CREATE_USER")
    }
    
};

module.exports = {getAllUsers, createUser, getUserByUsernameAndPassword};