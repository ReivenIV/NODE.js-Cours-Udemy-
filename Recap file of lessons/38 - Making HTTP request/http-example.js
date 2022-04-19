// Section 4 - 38 - Making a HTTP request


// -------------- way 1
// const { get } = require('https');

// get('https://www.google.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Data chunk: ${chunk}`)
//     });
//     res.on('end', () => {
//         console.log('No more data')
//     })
// });



// -------------- way 2
// const http = require('https');

// const req = http.request('https://www.google.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Data chunk: ${chunk}`)
//     });
//     res.on('end', () => {
//         console.log('No more data')
//     })
// });

// req.end();


//------------- way 3
// const { request } = require('https');

// const req = request('https://www.google.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Data chunk: ${chunk}`)
//     });
//     res.on('end', () => {
//         console.log('No more data')
//     })
// });
// req.end();