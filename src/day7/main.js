function main(arr) {
	let x=[];
	x.push([]);
	for(let i=0;i<arr.length;i++){
		x.push([arr[i]])
	};for(let i=0;i<arr.length;i++){
		if(arr.length>3){

	}
		for(let j=i+1;j<arr.length;j++){
			x.push([arr[i],arr[j]]);
		}
	}
	if(x.length<2**arr.length){
		x.push(arr);
		return x
	}else{
		return x
	}
	}

console.log(main([1, 2, 3, 4]))
    
module.exports = { main };
