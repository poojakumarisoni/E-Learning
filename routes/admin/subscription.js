const router = require("express").Router();
const { NotLoggedIn } = require("../../middlewares/Adminauth");
const SubscriptionController = require("../../controllers/admin/subscriptionController");

router.get("/list", NotLoggedIn, SubscriptionController.list);
router.post("/add", NotLoggedIn, SubscriptionController.add);
router.post("/edit", NotLoggedIn, SubscriptionController.edit);
router.post("/delete", NotLoggedIn, SubscriptionController.delete);

module.exports = router;
