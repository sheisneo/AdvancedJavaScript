const theList = ['Sid', 'Ali', true, 30, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
theList.pop(); 
theList.shift(); 
theList.unshift("FIRST"); 
theList[3] = "hello World"; 
theList[2] = "MIDDLE"; 
theList.push("LAST"); 
console.log(theList);