const express = require("express")
const router = express.Router();
const blogController = require ("../controllers/blogController.js");

router.post("/create-blog", blogController.createBlog);  
router.get("/read-blog", blogController.readBlog);
router.put("/update-blog", blogController.updateBlog);
router.delete("/delete-blog", blogController.deleteBlog);

module.exports = router;