/* Loop mit do...while.
Es sollen alle gerade Zahlen bis 20 im Dokument ausgeben werden.
*/

let nr = 0;
console.log("Even numbers less than 20");
do {
    nr++;
    if ((nr % 2) === 0) {
        console.log('Number : ', nr);
    }
} while (nr < (20 - 1));