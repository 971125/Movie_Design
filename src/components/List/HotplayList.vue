<template>
	<div class="playList">
		<ul>
			<li v-for="(item,index) in movies" :key="index">
				<div>
					<span><h1>{{index+1}}</h1></span>
					<img :src="item.movie_img" />
					<div class="moviesInfo">
						{{item.movie_name}}<br />
						上映时间：
						{{item.movie_date}}
					</div>
					<div class="moviesscore">
						<h1>{{item.movie_score}}分</h1>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import {hotplaymovieapi} from '../../api/index.js'
	export default{
		name:"Hotplay",
		data:function(){
			return({
				movies:[]
			})
		},
		async created() {
			await hotplaymovieapi().then((res)=>{
				this.movies=res.data;
			})
			this.movies.sort(function(m,n){
				var val1 = parseFloat(m.movie_score)
				var val2 = parseFloat(n.movie_score)
				return (val2-val1) 
			})
		}
	}
</script>

<style scoped>
	.playList{
		width: 800px;
		height: 100%;
	}
	.playList ul{
		list-style-type: none;
	}
	.playList ul li{
		width: 800px;
		height: 220px;
		border-top: #EFEFEF solid 1px;
		margin-top: 50px;
		background-color: #EFEFEF;
	}
	.playList ul li img{
		width: 160px;
		height: 220px;
	}
	span{
		display: inline-block;
		width: 100px;
		text-align: center;
		font-style: oblique;
	}
	.playList ul li:nth-child(-n+3) h1{
		color: #EF4238;
	}
	.moviesInfo{
		display: inline-block;
		width: 300px;
		height: 220px;
		margin-left: 50px;
	}
	.moviesscore{
		display: inline-block;
		width: 100px;
		font-style: oblique;
	}
</style>
