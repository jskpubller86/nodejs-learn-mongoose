const mongoose = require('mongoose'); // mongoose 모듈을 가져온다.

module.exports = () => {
    const connect = () => {
        if(process.env.NODE_ENV !== 'production'){
            mongoose.set('debug', true);
        }
    }
    mongoose.connect('mongodb://root:0124@localhost:27017/admin', {
        dbName: 'nodejs',
    }, (error) => {
        if (error) {
            console.log('몽고디비 연결 에러', error);
        } else {
            console.log('몽고디비 연결 성공');
        }
    });
}

