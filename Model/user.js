const users = [
    {
        id:1,
        username: 'user1',
        password: 'password1'
    }
]

const User = {
    findByUserNameAuth: (username) => users.find((user)=> user.username === username)
}

module.exports = User;