const DAL = require('../dal/dal');

const dal = new DAL();

module.exports = class UsersBLL {
async getUsers() {
    const result = await dal.read('users');
    return result;
};

async createUsers(object) {
    const result = await dal.create('users', object);
    return result;
};

async updateUsers(object) {
    const result = await dal.update('users', object);
    return result;
};

async deleteUsers(id) {
    const result = await dal.delete('users', id);
    return result;
};
}