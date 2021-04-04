var express = require('express');
var router = express.Router();
const api_get = require("../controllers/api_get");
const api_post = require("../controllers/api_post")

/* GET home page. */
router.get('/', api_get.getTasks);

router.post('/removeTask', api_post.removeTask)

router.post('/addTask', api_post.addTask)

router.post('/completeTask', api_post.completeTask)

module.exports = router;
