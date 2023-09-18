const Controller = require("../controler/user");
const router = require("express").Router();

router.get("/", Controller.getUsers);
router.get("/:uerId", Controller.getUser);
router.post("/", Controller.createUser);
router.put("/:userId", Controller.updateUser);
router.delete("/:userId", Controller.deleteUser);
module.exports = router;
