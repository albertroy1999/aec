const {
  // create,
  getUserByUserEmail,
  getUserByUserId,
  getUsers,
  updateUser,
  deleteUser
} = require("./user.service");
 const { hashSync, genSaltSync, compareSync } = require("bcrypt");
 const { sign } = require("jsonwebtoken");
 
const path = require('path');
 var result;

module.exports = {
  // createUser: (req, res) => {
  //   const body = req.body;
  //  // const salt = genSaltSync(10);
  //   // body.password = hashSync(body.password, salt);
  //   create(body, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({
  //         success: 0,
  //         message: "Database connection errror"
  //       });
  //     }
  //     return res.status(200).json({
  //       success: 1,
  //       data: results
  //     });
  //   });
  // },
  login: (req, res) => {
    const body =req.body;
    getUserByUserEmail(body.email, (err, results) => {console.log(body.password);
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
      if (body.password==results.password){
        result = true;
         console.log(body.password);
         console.log(result);
         console.log(body.email);
  
      }      
      if (result) {
        console.log(results);
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "24h"
        });
         return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken
        });
      
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
       }
    });
 },
  getUserByUserId: (req, res) => {
    var rollId = req.params.rollId;
    getUserByUserId(rollId, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found"
        });
      }
       results.password = undefined;
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  updateUsers: (req, res) => {
    const body = req.body;
     body.password = req.password
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully"
      });
    });
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found"
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully"
      });
    });
  }
};