import VueRouter from 'vue-router'
import Vue from 'vue'
import content from '../page/content.vue'
import movies from '../page/movies.vue'
import cinema from '../page/cinema.vue'
import list from '../page/List.vue'
import login from '../page/login.vue'
import record from '../page/record.vue'
import register from '../page/register.vue'
import moviesInfo from '../page/moviesInfo.vue'
import tickInfo from '../page/tickInfo.vue'
import HotplayList from '../components/List/HotplayList.vue'
import comesoonList from '../components/List/comesoonList.vue' 

Vue.use(VueRouter)

let routes = [
	{
		path:'/',
		name:'/',
		component: content
	},
	{
		path:'/movies',
		name:'movies',
		component:movies
	},
	{
		path:'/cinema',
		name:'cinema',
		component:cinema
	},
	{
		path:"/list",
		name:'list',
		component:list,
		children:[
			{
				path:'/',
				redirect:'/list/hotplayList'
			},
			{
				path:"/list/hotplayList",
				name:'hotplayList',
				component: HotplayList,
			},
			{
				path:"/list/comesoonList",
				name:'comesoonList',
				component: comesoonList,
			}
		]
	},
	{
		path:"/login",
		name:'login',
		component:login
	},
	{
		path:"/register",
		name:'register',
		component:register
	},
	{
		path:"/moviesInfo/:id",
		name:'moviesInfo',
		component:moviesInfo
	},
	{
		path:'/record',
		name:'record',
		component:record
	},
	{
		path:'/record/tickInfo/:id/:name/:src',
		name:"tickinfo",
		component:tickInfo
	}
]

const router=new VueRouter({
	routes
})

export default router