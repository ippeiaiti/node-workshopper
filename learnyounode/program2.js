var value = 0;
for(var i = 2; i < process.argv.length; i++){
  value += Number(process.argv[i]);
}
console.log(value);
