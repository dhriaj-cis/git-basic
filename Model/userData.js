let users = []

const User = {
    getAll: ()=> users,
    getById : ()=> users.find((user) => user.id === id),
    create: (name, email)=>{
        const id = users.length + 1;
        const newUser = {id, name, email};
        users.push(newUser);
        return newUser
     },
    updateById: (id, name, email) =>{
        const user = User.getById(id);
        if(!user) return null;
        user.name = name;
        user.email = email;
        return user
    },
    deleteById: (id) => {
        users = users.filter((user) => user.id !== id);
    }
};

module.exports = users;