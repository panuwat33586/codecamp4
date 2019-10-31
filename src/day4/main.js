function main(arr) {
	let count=0;
	arr.sort()
	for(let i=1;i<arr.length;i++){
		if(arr[i][0]<arr[i-1][1]){
			count++
		}
    };
	return ((arr.length-count)+1)
}


module.exports = { main };
