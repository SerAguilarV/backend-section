const mongoose = require("mongoose");

const { Schema } = mongoose;

const {compareSync, compare, hashSync, genSaltSync} = require("bcryptjs");
// compareSync compara contraseñas
// hashSync crea has de contraseña
// agrega salt a contraseña

const UserSchema = new Schema({
    name: { type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
});

UserSchema.methods.toJSON = function(){
    let user = this.toObject();
    delete user.password;
    return user;
}

UserSchema.methods.ComparePasswords = function(password){
    // console.log(this.password)
    // console.log(password)
    return compareSync(password, this.password);
}

UserSchema.pre('save', async function(next){
    const user = this;
    if (user.isModified("password")){
        return next;
    }

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
    next()
})

module.exports = mongoose.model("user", UserSchema);
