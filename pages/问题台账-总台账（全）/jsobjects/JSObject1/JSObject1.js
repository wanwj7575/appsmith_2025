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

}