// Manipulating an array
let theList = ['Elizabeth', 'Marsh', true, 35, null, undefined, { test: 'one' }, ['one', 'two']];
theList.pop();
theList.shift();
theList.unshift('FIRST');
theList[3] = 'Hello wworld';
theList[2] = 'MIDDLE';
console.log(theList);
