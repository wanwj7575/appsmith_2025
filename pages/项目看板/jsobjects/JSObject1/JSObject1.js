export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		let tabstitle = Tabs1.selectedTab
		if(tabstitle = "任务看板"){
			Select_t_project2.run()
			let nestedList = Select_t_project2.data
			let projectNames = nestedList.map(item => item.zentao_project_id);
			let t = projectNames.join(',')
			storeValue('select_project', t)
			sTask.run()
		}
		if(tabstitle = '日志看板'){
			sAction.run()
			}
	},
		
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}