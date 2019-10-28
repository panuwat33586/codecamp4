export function main(arr) {
	let count=0;
	arr.sort();
	switch(arr.length){
	case 1:
	  count++;
	  return count;
	  break;
	default:
		{for(let i=1;i<arr.length;i++){
		if(arr[i][0]<arr[i-1][1]){
			count++
		}
};
	return count
}
}
}