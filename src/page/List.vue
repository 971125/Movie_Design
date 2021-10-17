<template>
	<div class="list">
		<div class="title"><span><router-link to="/list/hotplayList">票房榜单</router-link></span>|<span><router-link to="/list/comesoonList">最受期待榜</router-link></span></div>
		<div class="moviesList">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name:"List",
		beforeMount() {
			window.scrollTo(0, 0)
		},
		methods:{
			change:function(event){
				console.log(event)
			}
		}
	}
</script>

<style scoped >
	*{
		margin: 0;
		padding: 0;
		user-select: none;
	}
	.list{
		width: 800px;
		margin-top: 100px;
		margin-left: 30px;
		position: absolute;
	}
	.title{
		width: 800px;
		height: 50px;
		margin-left: 200px;
		font-size: 30px;
		background-color: #47464a;
		color: #999;
	}
	.title span{
		display: inline-block;
		width: 390px;
		text-align: center;
	}
	.title span:hover{
		color: white;
	}
	.moviesList{
		width: 800px;
		height: 1000px;
		margin-top: 50px;
		margin-left: 200px;
		/* background-color: #0056B3; */
		overflow: auto;
		
	}
</style>
