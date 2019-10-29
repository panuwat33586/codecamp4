export function main(arr) {
	let R=[]
	let G=[]
	let B=[]
	for(let i=0;i<arr.length;i++){
		if(arr[i]=="R"){
			R.push(arr[i])
		}if(arr[i]=="G"){
            G.push(arr[i])
		}if(arr[i]=="B"){
            B.push(arr[i])
		}
	}

	let RG=R.concat(G);
	let RGB=RG.concat(B);
	return RGB
}

