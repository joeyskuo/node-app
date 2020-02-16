const fs = require('fs');
const path = require('path');

const usersFile = path.join(path.dirname(process.mainModule.filename),
'data',
'users.json');

const getUsersFromFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(usersFile, (err, data) => {
            if(err) {
                resolve([]);
            } else {
                resolve(JSON.parse(data));
            }
        });
    }); 
}

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    static findOne(email) {
        return new Promise(async (resolve, reject) => {
            const users = await getUsersFromFile();
            for(var i = 0; i < users.length; i++) {
                console.log("comparing " + email + " with " + users[i].email);
                if(users[i].email == email) resolve(users[i]);
            }

            resolve(undefined);
        });
    }

    static fetchAll() {
        return getUsersFromFile();
    }

}

module.exports = User;