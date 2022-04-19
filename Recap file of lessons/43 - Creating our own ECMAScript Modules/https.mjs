import { send } from './request.mjs';
import { read } from './response.mjs';


function makeRequest(url, data) {
    send(url, data);
    return read();

}

const  responseData = makeRequest('https://www.google.com', 'hello');
console.log(responseData); 

//you need to run in the terminal : node https.mjs -> you should have sending encrypted data to https://www.google.com decrypted data