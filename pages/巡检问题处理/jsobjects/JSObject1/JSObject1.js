export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here

	},
	myFun2: async () => {
		//use async-await or promises
		iProblem_order.run(),
	  uProblem_image.run() ,
	  uInspection_record_yes.run(),
	  closeModal('Modal2'),
		await sProblem.run()
	},
	myFun3: async () => {
		//use async-await or promises
		const now = new Date().getTime();
		if (Select2.selectedOptionLabel == 1){
			const nowPlus8Hours = now + 6 * 3600 * 1000;
			const date = new Date(nowPlus8Hours);
			const formattedDate = date.toLocaleString()
			return formattedDate
		}else if (Select2.selectedOptionLabel == 2){
			const nowPlus8Hours = now + 24 * 3600 * 1000;
			const date = new Date(nowPlus8Hours);
			const formattedDate = date.toLocaleString()
			return formattedDate
		}else if (Select2.selectedOptionLabel == 3){
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
	},
	myFun4: async() =>{
		const tabs = Tabs1.selectedTab
		if(tabs == '待确认'){
			sProblem.run()
		}else if (tabs == '已确认'){
			sProblem_yes.run()
		}else{
			sProblem_no_images.run()
		}
	},
	myFun5: async() =>{
		const activations = appsmith.store.activation
		
	}
}