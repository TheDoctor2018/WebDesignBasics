//function

function addNUM(val){
    return val + val;
};

module.exports = addNUM;//allows function to be export so it can be used by other files. 

//How to check for node and npm
/*
node --version
npm --version

node --version && npm --version
*/

//the package.json is how we keep track of modules the project depends on. 

//install npm locally on the folder for the project
//#1 chnage the directory cd filename
// npm install --save-dev jest
// replace with "echo \"Error: no test specified\" && exit 1" with jest on package.json
//eill add file after complet package-lock.json
//create a file Adding.test.js
// run with "npm run test"