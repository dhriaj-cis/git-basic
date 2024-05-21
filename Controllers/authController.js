const AuthService = require('../Service/authService');

const AuthController = {
    login: (req, res) =>{
        const { username, password } = req.body;
        const token = AuthService.authenticateUser(username, password);
        if(!token){
            return res.status(401).json({ message : 'Invalid username or password '})
        }
        res.json({token});
    }
};

module.exports = AuthController;