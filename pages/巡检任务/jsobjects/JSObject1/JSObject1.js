export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	inspection_in: async () => {
		//use async-await or promises
		storeValue('inspection_task_id',Table1.triggeredRow.inspection_task_id)
		await navigateTo('新建巡检子任务', {})
	},
	inspection_record:  async()=>{
		storeValue('inspection_task_id',Table1.triggeredRow.inspection_task_id)
		await navigateTo('巡检任务详情', {})
	},
	inspection_record_mo: async()=>{
		storeValue('inspection_task_id',List1.selectedItem.inspectionsubtask_id)
		await navigateTo('巡检任务详情', {})
	},
myFun2: async () => {
		//use async-await or promises
		if (FilePicker1.files.length == 0 ){
			iInspection_case_no.run()
		}else if (FilePicker1.files.length == 1 ){
			iInspection_case_no.run(),
			await iProblem_images_one.run()
		}else {
			iInspection_case_no.run(),
			iProblem_images_one.run(),
			await iProblem_images_two.run()
		}
			closeModal('Modal1') 
	}
}