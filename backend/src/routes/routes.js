const express = require('express');
const router = express.Router();

const{
    postTask,
    getTask,
} = require('../controllers/controllers');

router.post('/api/list',postTask);
router.get('/api/alllist',getTask);

module.exports = router;