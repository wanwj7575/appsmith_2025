export default {
	myVar1: [],
	myVar2: {},
	
	myFun1: () => {
		// 
		let a = online_problems__closed.data
		let b = sProblem_processed_bug.data
		let c = b.map( i => i.name ) 
  //如果c中包含a数组某个元素的id，说明b数组中也有改元素，移除
		let d = a.filter( i => !c.includes(i.name))
		return d
	},
		
	myFun2: () => {
		// 
		let e = online__problems_postponed.data
		let f = sProblem_delay_bug.data
		let g = f.map( i => i.name ) 
  //如果c中包含a数组某个元素的id，说明b数组中也有改元素，移除
		let k = e.filter( i => !g.includes(i.name))
		return k
	},
	tabsselect:() =>{
		let tabstitle = Tabs1.selectedTab
		if(tabstitle = "线上问题"){online_problems__closed.run(),sProblem_processed_bug.run()}
		if(tabstitle = '遗留问题'){online__problems_postponed.run(), sProblem_delay_bug.run()}
	},

}