const fs = require('fs');
const path = require('path');

class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const productsFile = path.join(path.dirname(process.mainModule.filename),
        'data',
        'products.json');

        fs.readFile(productsFile, (err, data) => {
            let products = [];
            if(!err) {
                products = JSON.parse(data);
            }
            products.push(this);

            fs.writeFile(productsFile, JSON.stringify(products), (err) => {
                console.log(err);
            });
        })
    }

    static fetchAll() {
        
    }

}

module.exports = Product;