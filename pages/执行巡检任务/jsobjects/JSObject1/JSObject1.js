export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		//use async-await or promises
		storeValue('inspection_record_name', Input3.inputText)
		if (FilePicker1.files.length == 0 ){
			iInspection_case_no.run()
		}else if (FilePicker1.files.length == 1 ){
			iInspection_case_no.run(),
			await iProblem_images_one.run()
		}else {
			iInspection_case_no.run(),
			await iProblem_images_one.run(),
			await iProblem_images_two.run()
		}
			closeModal('Modal1') ,
			sRInspectionCase.run()
	}
}