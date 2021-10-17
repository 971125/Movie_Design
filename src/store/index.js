import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		Login:false,
		name:"",
		list:"",
		tel:""
	},
	mutations:{
		Change(state,Logintr){
			state.Login=Logintr
		},
		Changename(state,name){
			state.name=name
		},
		Changelist(state,list){
			state.list=list
		},
		Changetel(state,tel){
			state.tel=tel
		}
	}
})

export default store
