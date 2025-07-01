export default {
	myVar1: [],
	myVar2: {},
	
myFun1: () => {
		// 
		let  fixed_channel = Table1Copy.selectedRow.fixed_channel
		if(fixed_channel == '禅道线上bug'){
			navigateTo('https://chandao.duocai.online/zentao/bug-view-' + Table1Copy.selectedRow.chandao_id + '.html', {},'NEW_WINDOW')
		}else if(fixed_channel == '项目延期处理'){
			navigateTo('https://chandao.duocai.online/zentao/bug-view-' + Table1Copy.selectedRow.chandao_id + '.html', {},'NEW_WINDOW')
		}else {
			storeValue('problem_id',Table1Copy.selectedRow.problem_id),
			navigateTo('台账问题详情', {}, 'NEW_WINDOW')
		}	
	},
myFun2: () => {
		// 
		let  fixed_channel = Table1.selectedRow.fixed_channel
		if(fixed_channel == '禅道线上bug'){
			navigateTo('https://chandao.duocai.online/zentao/bug-view-' + Table1.selectedRow.chandao_id + '.html', {},'NEW_WINDOW')
		}else if(fixed_channel == '项目延期处理'){
			navigateTo('https://chandao.duocai.online/zentao/bug-view-' + Table1.selectedRow.chandao_id + '.html', {},'NEW_WINDOW')
		}else {
			storeValue('problem_id',Table1.selectedRow.problem_id),
			navigateTo('台账问题详情', {}, 'NEW_WINDOW')
		}	
	},
myFun3: () => {
		// 
		let  fixed_channel = Table1CopyCopy.selectedRow.fixed_channel
		if(fixed_channel == '禅道线上bug'){
			navigateTo('https://chandao.duocai.online/zentao/bug-view-' + Table1CopyCopy.selectedRow.chandao_id + '.html', {},'NEW_WINDOW')
		}else if(fixed_channel == '项目延期处理'){
			navigateTo('https://chandao.duocai.online/zentao/bug-view-' + Table1CopyCopy.selectedRow.chandao_id + '.html', {},'NEW_WINDOW')
		}else {
			storeValue('problem_id',Table1CopyCopy.selectedRow.problem_id),
			navigateTo('台账问题详情', {}, 'NEW_WINDOW')
		}	
	},
myFun4: () => {
		// 
		let  fixed_channel = Table1Copy1.selectedRow.fixed_channel
		if(fixed_channel == '禅道线上bug'){
			navigateTo('https://chandao.duocai.online/zentao/bug-view-' + Table1Copy1.selectedRow.chandao_id + '.html', {},'NEW_WINDOW')
		}else if(fixed_channel == '项目延期处理'){
			navigateTo('https://chandao.duocai.online/zentao/bug-view-' + Table1Copy1.selectedRow.chandao_id + '.html', {},'NEW_WINDOW')
		}else {
			storeValue('problem_id',Table1Copy1.selectedRow.problem_id),
			navigateTo('台账问题详情', {}, 'NEW_WINDOW')
		}	
	},
tabsselect:() =>{
		let tabstitle = Tabs1.selectedTab
		if(tabstitle = '总台账'){
			sProblem_order.run()
		}else if(tabstitle = '待确认'){sProblem_order_immediately.run()}
		 else if(tabstitle = '待解决'){sProblem_order_Pending.run()}
		 else if(tabstitle = '延期解决'){sProblem_order_delay.run()}
	},

}