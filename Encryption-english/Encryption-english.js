 'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the encryption function below.
function encryption(s) {
    var spaceRemoved = s.trim();
    var L = spaceRemoved.length;
    var sqrtL = Math.sqrt(L);
    var a = Math.floor(sqrtL);
    var b = Math.ceil(sqrtL);
    var c = a * b;
    if (c < L) {
        a = b
    };
    // var ENCarr = new Array(a).fill(null).map(item => (new Array(b).fill(null)));
    var ENCarr = [];
    var i;
    var k;
    var FArray = spaceRemoved.split("")
    var ReqArr = []
    if (a < b) {
        for (i = 0; i < a; i++) {
            var row = []
            for (k = 0; k < b; k++) {
                if (FArray[i * a + k + i]) {
                    row.push((FArray[i * a + k + i]));
                } else {
                    row.push(" ");
                }
            }
            ReqArr.push(row);
        };  
    } else {
        for (i = 0; i < a; i++) {
            var row = []
            for (k = 0; k < b; k++) {
                if (FArray[i * a + k ]) {
                    row.push((FArray[i * a + k ]));
                } else {
                    row.push(" ");
                }
            }
            ReqArr.push(row);
        };  
   }
   
    //console.log('ReqArr  ', ReqArr);
    //console.log('FArray      ', FArray);

var resultArr = ""
    for (i = 0; i < b; i++) {
        var row =''
        for (k = 0; k < a; k++) {
            if (ReqArr[k][i] !== " ") {
                row = row + ReqArr[k][i];                
            }
        }
        if (resultArr !== "") {
            resultArr = resultArr + " " + row;
        } else {
            resultArr =   row;
        }
       
    };
    return ( resultArr);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
