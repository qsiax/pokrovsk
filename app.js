var fs = require('fs');

var filePath = 'source/document/1.pdf';

for(let i= 0; i < 60; i++) {
    fs.copyFile(filePath, `source/document/${[i]}.pdf`, (err) => {
        if (err) {
            throw err;
        }
        console.log('успешно');
    });
}