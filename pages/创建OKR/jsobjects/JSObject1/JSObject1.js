export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
		let n = Table2.triggeredRow.objectives_naem
		if(isFinite(n)){
			uObjectives_o.run()
		}else{
			uObjectives_o_string.run()
		}
		
	},
	myFun2: async () => {
		//use async-await or promises
	}
}