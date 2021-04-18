const { User } = require('../sqlModels');

const userService = {
    allUser: async () => {
        try {
            const allUser = await User.findAll();

            return allUser;
        } catch (exception) {
            throw exception;
        }
    },

    userInfo: async (userId) => {
        try {
            const userInfo = await User.findOne({
                attributes: ['id', 'name', 'age', 'married', 'comment'],
                where: {
                    id: userId
                }
            })

            return userInfo;
        } catch (exception) {
            throw exception;
        }
    },

    createUser: async (user_id, password, email, name, age, gender) => {
        try {
            await User.create({
                user_id,
                password,
                email,
                name,
                age,
                gender
            });

            return true;
        } catch (exception) {
            throw exception;
        }
    },

    updateUser: async (userId, comment) => {
        try {
            await User.update({
                comment: comment,
            }, {
                where: {
                    id: userId
                }
            });

            return true;
        } catch (exception) {
            throw exception;
        }
    },

    deleteUser: async (userId) => {
        try {
            await User.destroy({
                where: {
                    id: userId
                }
            });

            return true;
        } catch (exception) {
            throw exception;
        }
    }
}

module.exports = userService;