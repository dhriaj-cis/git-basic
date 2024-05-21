const jwt = require('jsonwebtoken');
const User = require('../Model/user')

const AuthService = {
    authenticateUser: (username, password) => { 
        const user = User.findByUserNameAuth(username);
        if(!user || user.password !== password){
            return null
        }
        return jwt.sign({ id:user.id, username: user.username}, 'sEcREt+KeY', { expressIn: '1h' } ); 
    }
}

module.exports = AuthService;
