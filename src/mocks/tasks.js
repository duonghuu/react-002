const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const items = [
    {'id':uuidv4(), 'name': 'Abc', "level": 0},
    {'id':uuidv4(), 'name': 'Def', "level": 1},
    {'id':uuidv4(), 'name': 'Ghi', "level": 2},
    {'id':uuidv4(), 'name': 'Ghi xxx', "level": 0},
];
export default items;