
const object = {
    a: 'somestring',
    b: 42,
    c: false,
    k: 'k',
    yay: 'yay',
};
const same = [];

Object.entries(object).forEach(([key, value]) => {
    if (key === value) {
        same.push([key, value]);
    }
});

const obj = Object.fromEntries(same);

console.log(`${obj.yay}${obj.k}`);