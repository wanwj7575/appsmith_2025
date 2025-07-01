export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun1: async () => {
		//use async-await or promises
		storeValue('dicttype_id',Table1.triggeredRow.id)
		storeValue('dicttype_name',Table1.triggeredRow.dict_name)
		await navigateTo('字典详情', {})
	},
	
	sdicttype: async() => {}
}



