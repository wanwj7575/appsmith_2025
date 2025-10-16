export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		const data2 = Sproject_task.data
	  const data1 = Select_t_project1.data

		function compareTasks(data1, data2) {
    return data1.map(task1 => {
        // 调试日志：打印当前匹配的ID
        console.log(`正在匹配ID: ${task1.id}`);
        
        const matchedTask = data2.find(item => {
            console.log(`检查ID: ${item.zentao_task_id} vs ${task1.id}`);
            return item.zentao_task_id = task1.id;
        });

        if (!matchedTask) {
            console.warn(`未找到匹配项: ${task1.id}`);
            return {
                id: task1.id,
                project_name: task1.project_name,
                error: '未匹配到验收记录'
            };
        }

        // 调试日志：打印匹配到的数据
        console.log('匹配到的验收数据:', matchedTask);
        
        return {
            id: task1.id,
            project_name: task1.project_name,
            accept_values: {
                estStarted: matchedTask.estStarted,
                deadline: matchedTask.deadline,
                realname: matchedTask.realname
            },
            // 原始数据引用
            raw_data: {
                test_data: task1,
                accept_data: matchedTask
            }
        };
    });
}
		const enrichedData = compareTasks(data1, data2);
		return enrichedData
		console.log(enrichedData);
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}