
//NOTES
//don't want array[0] or array [1]
// i > 1 && i < length
//+array[i]

var sum = 0;

for(var i = 2; i < process.argv.length; i++){
	sum+=Number(process.argv[i]);
}
console.log(sum);