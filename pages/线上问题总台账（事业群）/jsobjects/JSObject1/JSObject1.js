export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		if (Select1.selectedOptionValue){
			sRdept.run()
		  let S1 = sRdept.data[0].id
			await storeValue('s1_select', S1)
		}else{
			let s2 = '%'
			await storeValue('s1_select', s2)
		}
		await sProblem.run()
	}
}