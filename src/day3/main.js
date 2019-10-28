export function main(str) {
	let count=0;
	let container=[];
	for(let i=0;i<str.length;i++){
		if(str[i]==str[i+1]){
		count++;
	 }else{
		 count++;
		 container+=count;
		 container+=str[i];
		 count=0;
	 }
	};
	return container
}

