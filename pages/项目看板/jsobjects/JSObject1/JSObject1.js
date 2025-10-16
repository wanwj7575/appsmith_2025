export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		let tabstitle = Tabs1.selectedTab
		if(tabstitle = "任务看板"){
			Select_t_project1.run()
			let nestedList = Select_t_project1
			let projectNames = nestedList.data.map(item => item.zentao_task_id);
			let t = projectNames.join(',')
			storeValue('select_project', t)
			sTask.run()
		}
		if(tabstitle = '日志看板'){
			sAction.run()
			}
	},
	myFun11 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		// 
		
		const data2 = Sproject_task.data
		const data1 = Select_t_project1.data

function compareAndMerge(data1, data2) {
    // 创建data1的深拷贝以避免修改原始数据
    const mergedData = JSON.parse(JSON.stringify(data1));
    
    mergedData.forEach(task => {
        // 在data2中查找匹配项
        const matchedTask = data2.find(item => item.id == task.zentao_task_id);
        
        if (matchedTask) {
            // 日期比较函数
            const dateCompare = (date1, date2) => {
                if (!date1 || !date2) return false;
                return new Date(date1).getTime() === new Date(date2).getTime();
            };
            
            // 创建对比结果对象
            task.comparison_result = {
                time_comparison: {
                    start_date: {
                        test_value: task.project_starttime,
                        accept_value: matchedTask.estStarted,
                        is_match: dateCompare(task.project_starttime, matchedTask.estStarted),
                        discrepancy_days: Math.abs(
                            (new Date(task.project_starttime) - new Date(matchedTask.estStarted)) / (1000 * 60 * 60 * 24)
                        )
                    },
                    end_date: {
                        test_value: task.project_endtime,
                        accept_value: matchedTask.deadline,
                        is_match: dateCompare(task.project_endtime, matchedTask.deadline),
                        discrepancy_days: Math.abs(
                            (new Date(task.project_endtime) - new Date(matchedTask.deadline)) / (1000 * 60 * 60 * 24)
                        )
                    }
                },
                personnel_comparison: {
                    test_director: task.test_director,
                    accept_director: matchedTask.realname,
                    is_match: task.test_director === matchedTask.realname
                },
                match_status: 'MATCHED',
                accept_data: {
										id:matchedTask.id,
                    project_name: matchedTask.project_name,
                    status: matchedTask.status,
                    realname: matchedTask.realname
                }
            };
        } else {
            // 未匹配的情况处理
            task.comparison_result = {
                match_status: 'UNMATCHED',
                message: '未找到匹配的验收记录'
            };
        }
    });
    
    return mergedData;
}

const enrichedData = compareAndMerge(data1, data2);
		return enrichedData
console.log(enrichedData);

		},
		
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}