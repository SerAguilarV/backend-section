const Baserepository = require("./base.repository");
let _comment = null;

class CommentRepository extends Baserepository {
    constructor({ Comment }){
        super(Comment);
        _comment = Comment;
    }
}

module.exports = CommentRepository;