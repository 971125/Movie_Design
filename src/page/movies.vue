<template>
	<div class="movies">
		分类:<label data-index="1" class="" @click="add">纪录片</label>
				<label data-index="2" class="" @click="add">动作</label>
				<label data-index="3" class="" @click="add">爱情</label>
				<label data-index="4" class="" @click="add">喜剧</label>
				<label data-index="5" class="" @click="add">动画</label>
				<label data-index="6" class="" @click="add">剧情</label>
		<div  class="moviesList">
			<ul>
				<li v-for="(item,index) in moviesx" :key="index">
					<movielitm :src="item.movie_img" :name="item.movie_name"></movielitm>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import movielitm from './movielitm.vue'
	import {hotplaymovieapi,comesoonapi} from '../api/index.js'
	export default{
		name:"movies",
		data:function(){
			return({
				moviesList:[],
				movies:"",
				moviesx:"",
			})
		},
		components:{
			movielitm
		},
		methods:{
			add:function(event){
				var index= event.toElement.innerText
				var inde=this.moviesList.indexOf(index)
				if(inde<0){
					this.moviesList.push(index)
				}else{
					this.moviesList.splice(inde,1)
				}
				var xuan=event.toElement.className;
				event.toElement.className = xuan == "xuan"?"":"xuan"
				this.filter()
			},
			filter:function(){
				this.moviesx = this.movies.filter(item=>{
					if(this.moviesList.length == 0){
						return true
					}else{
						return  !this.moviesList.indexOf(item.movies_type) 
					}
				})	
			}
		},
		async beforeMount() {
			await hotplaymovieapi().then((res)=>{
				this.movies = res.data;
			})
			await comesoonapi().then((res)=>{
				this.movies = this.movies.concat(res.data)
			})
			this.moviesx=this.movies
			window.scrollTo(0, 0)
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		user-select: none;
	}
	.movies{
		width: 1000px;
		margin-top: 100px;
		margin-left: 100px;
		position: absolute;
	}
	label{
		width: 100px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		border: #D8D8D8 solid 1px;
		margin-left: 50px;
	}
	.xuan{
		background-color: #EF4238;
		color: white;
	}
	.moviesList{
		width: 1000px;
		height: 800px;
		border-top: #EFEFEF solid 1px;
		margin-top: 50px;
	}
	.moviesList ul{
		list-style-type: none;
	}
	.moviesList ul li{
		display: inline-block;
	}
</style>
