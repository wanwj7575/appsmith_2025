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
		if (FilePicker1.files.length == 0 ){
			uProblem_order.run()
		}else if (FilePicker1.files.length == 1 ){
			uProblem_order.run(),
			await iProblem_images_one.run()
		}else {
			uProblem_order.run(), 
			iProblem_images_one.run(),
			await iProblem_images_two.run()
		}
			navigateTo('问题台账', {})
	},
	myFun3: async () => {
		//use async-await or promises
		const now = new Date().getTime();
		if (Select5.selectedOptionLabel == 1){
			const nowPlus8Hours = now + 6 * 3600 * 1000;
			const date = new Date(nowPlus8Hours);
			const formattedDate = date.toLocaleString()
			return formattedDate
		}else if (Select5.selectedOptionLabel == 2){
			const nowPlus8Hours = now + 24 * 3600 * 1000;
			const date = new Date(nowPlus8Hours);
			const formattedDate = date.toLocaleString()
			return formattedDate
		}else if (Select5.selectedOptionLabel == 3){
			const nowPlus8Hours = now + 168 * 3600 * 1000;
			const date = new Date(nowPlus8Hours);
			const formattedDate = date.toLocaleString()
			return formattedDate
		}else{
			const nowPlus8Hours = now + 720 * 3600 * 1000;
			const date = new Date(nowPlus8Hours);
			const formattedDate = date.toLocaleString()
			return formattedDate
		}
	}
}