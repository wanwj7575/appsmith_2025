export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		
		const data1 = [{
			id: 28693,
			project_name: "爱情数V3.4.0",
			estStarted: "2025-10-11",
			deadline: "2025-10-20",
			test_director:"罗朝文"
		}];

		const data2 = [{
			id: 1010,
			zentao_task_id: 28693,
			project_starttime: "2025-09-05",
			project_endtime: "2025-09-12",
			realname:"罗朝文"
		}]
		function compareTasks(data1, data2) {
				const task1 = data1[0];
				const matchedTask = data2.find(item => item.zentao_task_id === task1.id);

				return {
						id: task1.id,
						project_name: task1.project_name,
						estStarted_compare: task1.estStarted === matchedTask.project_starttime,
						deadline_compare: task1.deadline === matchedTask.project_endtime,
						realname_compare: task1.test_director === matchedTask.realname
				};
		}

// 调用示例
const comparisonResult = compareTasks(data1, data2);
console.log(comparisonResult);
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}