export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		let s = Select10.selectedOptionValue
		if (s == '已完成'){
			sRproject_bugnumber.run()
			showModal('Modal6')
		} else{
			showModal('Modal4')
		}
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}