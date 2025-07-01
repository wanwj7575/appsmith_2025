export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
		let project_name_all= sProject.data[0].project_name_all
		storeValue('project_name_all', project_name_all)
		return appsmith.store.project_name_all
	},
	myFun2: async () => {
		//use async-await or promises
	}
}