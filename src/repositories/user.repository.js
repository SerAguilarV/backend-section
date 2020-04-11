const Baserepository = require("./base.repository")

let _user = null;

class UserRepository extends Baserepository{
    constructor({ User }){
        super(User);
        _user = User;
    }

    async getUserByUserName(username){
        return await _user.findOne({username});
    }
}

module.exports = UserRepository;