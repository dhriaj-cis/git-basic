const User = require('../Model/userData');

const UserController = {
    getAllUsers : (req, res)=> {
        const users = User.getAll();
        res.json(users);
    },

    getUserById: (req, res) => {
        const id = parseInt(req.params.id);
        const user = User.getById(id);
        if(!user) return res.status(404).send('User not found');
        res.json(user);
    },

    createUser: (req, res) => {
        const { name, email } = req.body;
        const newUser = User.create(name, email)
        res.json(newUser);
    },
    updateUserById: (req, res) => {
        const id = parseInt(req.params.id);
        const { name, email } = req.body;
        const updateUser = User.updateById(id, name, email);
        if(!updateUser) return res.status(404).send('User not found');
        res.json(updateUser)
    },
    deleteUserById: (req, res) => {
        const id = parseInt(req.params.id);
        User.deleteById(id);
        res.send('User deleted successfully');
    },
};

module.exports = UserController;