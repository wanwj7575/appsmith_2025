export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
		let  tab = Tabs1.selectedTab
		if (tab == '全部'){online_problems.run()}
		if(tab == '待关闭'){not_closed_problems.run()}
		if(tab == '待解决'){to_solved_problems_.run()}
	},
	myFun2: async () => {
		//use async-await or promises
	}
}