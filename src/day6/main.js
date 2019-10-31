function main(root) {
	let node=root;
	let queue=[node];
	let finaldata=[]
	while(queue.length){
		node=queue.shift()
		if(node.left)queue.push(node.left)
		if(node.right)queue.push(node.right)
		finaldata.push(node.value)
	}
let result=finaldata.sort(function(a,b){return a - b})
return result[result.length-2]
}

module.exports = { main };
