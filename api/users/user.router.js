const express = require("express")
const router = express.Router();
const { checkToken } = require("../../auth/token_validation");
const {
  // createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("./user.controller");
router.get("/user", checkToken, getUsers);
// //router.post("/", checkToken, createUser);
router.get("/:rollId", checkToken,getUserByUserId);
router.post("/login", login);
router.patch("/",checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;