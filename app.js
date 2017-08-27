console.log('Starting App');

const fs=require('fs');
const os=require('os');
const notes=require('./notes.js');
const _=require('lodash');

var filteredArray=_.uniq(['Geetika',1,'Geetika',1,2,3,4,5,6,7]);
console.log(filteredArray);

//_.isString(true);
//console.log(_.isString(true));
//console.log(_.isString('Geetika Luthra'));

//var user=os.userInfo();
//var res=notes.addNote();
//console.log(res);

//var res=notes.add(9,-2);
//console.log(res);
//console.log(user);
//console.log('hi'+user.username);
//fs.appendFile('greetings.txt',`Hello ${user.username} !!! You are ${notes.age}`);
//fs.appendFile('greetings.txt','Hello World');