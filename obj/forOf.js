
/* eslint-disable no-restricted-syntax */

function *fibonacci() {
    let [prev, curr] = [0, 1];

    while (true) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (const n of fibonacci()) {
    console.log(n);
    if (n >= 1597) {
        break;
    }
}