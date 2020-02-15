const fs = require('fs');
const path = require('path');

const productsFile = path.join(path.dirname(process.mainModule.filename),
'data',
'products.json');

const getProductsFromFile = (callback) => {

    fs.readFile(productsFile, (err, data) => {
        if(err) {
            callback([]);
        } else {
            callback(JSON.parse(data));
        }
    });
}


class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(productsFile, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        getProductsFromFile(callback);
    }

}

module.exports = Product;