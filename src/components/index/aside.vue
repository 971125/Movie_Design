<template>
	<div class="aside">
		<div class="title">今日票房</div>
		<ul>
			<li v-for="(item,index) in movies" :key="index" >
				<span>{{index+1}}</span>  {{item.movie_name}} <div class="movies_num">{{item.movie_mony}}万</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import {hotplaymovieapi} from '../../api/index.js'
	export default{
		name:'Aside',
		data:function(){
			return(
			{
				movies:[]
			})
		},
		async created() {
			await hotplaymovieapi().then((res)=>{
				this.movies=res.data;
			})
			this.movies.sort(function(m,n){
				var val1 = parseFloat(m.movie_mony)
				var val2 = parseFloat(n.movie_mony)
				return (val2-val1) 
			})
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		user-select: none;
	}
	.title{
		width: 104px;
		height: 35px;
		font-size: 26px;
		color: #EF4238;
	}
	.aside ul{
		list-style-type: none;
		margin-top: 30px;
	}
	.aside ul li{
		width: 360px;
		height: 55px;
		line-height: 55px;
		margin-bottom: 5px;
		border: #d8d8d8 solid 1px;
		border-radius: 10px;
		user-select: none;
	}
	.aside ul li .movies_num{
		width: 100px;
		height: 55px;
		display: inline-block;
		float: right;
		text-align: right;
		margin-right: 10px;
		font-size: 14px;
		color: #EF4238;
	}
	.aside ul li:hover{
		border: #D8D8D8 solid 1px;
		background-color: #EFEFEF;
		box-shadow: #D8D8D8 2px 2px 2px 0px;
	}
	.aside ul li span{
		display: inline-block;
		margin-left: 15px;
		margin-right: 15px;
		width: 20px;
		line-height: 55px;
		text-align: center;
	}
	.aside ul li:nth-child(-n+3) span{
		font-size: 26px;
		color: #EF4238;
	}
</style>
