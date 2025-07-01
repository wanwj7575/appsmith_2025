export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
		let  tabs = Tabs1.selectedTab
		if (tabs = '计划任务'){sProject_task.run()}
		if (tabs = '项目文档'){sProject_describe.run()}
		if (tabs = '数据统计'){project_bug_delay.run(), project_bug_disapproval.run(),project_bug_notclosed.run(),project_bug_whole.run(),project_bug_invalid.run(),case_to_result.run()}
		if (tabs = '项目日志'){sTask_record_all.run()}
		if (tabs = '待解决问题'){sProblem_solved__bug.data}
		if (tabs = '迭代记录'){sTask_record_all.run()}
		if (tabs = 'LOG'){sProject_record_all.data}
		
	},
	myFun2: async () => {
		//use async-await or promises
		iProject_task.run()
		await closeModal('Modal2') 
		await sProject_task.run()
		await iTask_record.run()
	}
}