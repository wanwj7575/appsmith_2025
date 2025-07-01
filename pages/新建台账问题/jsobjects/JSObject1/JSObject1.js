export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		//use async-await or promises
		storeValue('problem_name', Input1.inputText)
		if (FilePicker1.files.length == 0 ){
			iProblem_order.run()
		}else if (FilePicker1.files.length == 1 ){
			iProblem_order.run(),
			await iProblem_images_one.run()
		}else {
			iProblem_order.run(),
			iProblem_images_one.run(),
			await iProblem_images_two.run()
		}
		navigateTo('问题台账', {}, 'SAME_WINDOW')
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