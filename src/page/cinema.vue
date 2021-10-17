<template>
	<div class="cinema">
		<div class="dropleft">
			<h2>本地影院</h2>
			<div class="moviesList">
			<ul>
				<li v-for="(item,index) in movies" :key="index">
					<router-link :to="{name:'moviesInfo',params:{id:item.movie_id}}">
					<img :src="item.movie_img" />
					<div class="movie_info">
						<span>{{item.movie_name}}</span>
						<div class="playTime">
							今日{{item.movies_time}}放映<br />
							第一放映厅<br />
							票价:￥{{item.movie_price}}
						</div>
					</div>
					</router-link>
				</li>
			</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {hotplaymovieapi} from '../api/index.js'
	export default{
		name:"cinema",
		data:function(){
			return({
				movies:[]
			})
		},
		async created() {
			await hotplaymovieapi().then((res)=>{
				this.movies=res.data;
			})
		},
		beforeMount() {
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
	.cinema{
		width: 1200px;
		margin-top: 100px;
		margin-left: 30px;
		position: absolute;
	}
	.dropleft{
		width: 100%;
		height: 60px;
		position: relative;
		float: left;
		margin-left: 20px;
		text-align: center;
	}
	h2{
		font-family: "楷体";
		color: #EF4238;
	}
	.dropleft ul{
		list-style-type: none;	
	}
	.dropleft ul li{
		width: 80%;
		height: 300px;
		margin-left: 100px;
		margin-top: 20px;
		text-align: left;
		border: #EFEFEF solid 1px;
	}
	.dropleft ul li img{
		width: 160px;
		height: 220px;
		margin-top: 40px;
		margin-left: 150px;
	}
	.movie_info{
		display: inline-block;
		height: 220px;
		width: 500px;
		background-color: #EFEFEF;
		vertical-align: top;
		margin-top: 40px;
		padding-left: 80px;
		font-size: 20px;
	}
	.movie_info span{
		height: 50px;
		width: 200px;
		display: inline-block;
		font-weight: 700;
		font-size: 30px;
		margin-top: 90px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		/* background-color: #000000; */
	}
	.btn{
		width: 150px;
		height: 50px;
		font-size: 30px;
		margin-left: 50px;
	}
	.playTime{
		display: inline-block;
		margin-left: 50px;
		padding-top: 20px;
	}
	.moviesList{
		width: 100%;
		height: 1300px;
		overflow: auto;
		/* background-color: #0056B3; */
	}
</style>
