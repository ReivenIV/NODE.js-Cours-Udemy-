const {send, read } = require('./internals')
// const { send } = require ('./request');
// const { read } = require ('./internals/response');


function makeRequest(url, data) {
   send(url, data);
   return read();

}

const  responseData = makeRequest('https://www.google.com', 'hello');
console.log(responseData); 

//---> these log show you all the info of each file in the terminal:  console.log(require.cache); 