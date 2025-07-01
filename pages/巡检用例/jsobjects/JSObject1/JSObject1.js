export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		//use async-await or promises
		storeValue('inspectioncase_id',Table1.selectedRow.inspectioncase_id)
		await  navigateTo('巡检记录', {})
	}
}