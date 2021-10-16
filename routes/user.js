const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcryptjs = require('bcryptjs');

router.post('/register', async(request, response, next) => {
    const {username, email, password} = request.body;
    try {
        let user_exist = await User.findOne({email: email});
        if(user_exist) {
            response.json({
                success: false,
                message: "User already exists"
            })
        }

        let user = new User(username, email, password);
        await User.create(user);
        response.json({
            success: true,
            message: "User created successfully"
        })

    } catch (error) {
        console.log(error);
    }
});  

module.exports = router;