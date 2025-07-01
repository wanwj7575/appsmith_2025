export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		//use async-await or promises
		if (Switch1.isSwitchedOn) {
			iTest_project_yescase.run(() => navigateTo('项目测试', {}), () => {})
		} else {
			iTest_project_nocase.run(() => navigateTo('项目测试', {}), () => {})
		}
	}
}