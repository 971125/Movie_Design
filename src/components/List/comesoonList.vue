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
						<h1>{{item.wish}}</h1>人想看
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import {comesoonapi} from '../../api/index.js'
	export default{
		name:"comesoon",
		data:function(){
			return({
				movies:[]
			})
		},
		async created() {
			await comesoonapi().then((res)=>{
				this.movies=res.data;
			})
			this.movies.sort(function(m,n){
				var val1 = parseFloat(m.wish)
				var val2 = parseFloat(n.wish)
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
		width: 250px;
		height: 220px;
		margin-left: 50px;
	}
	.moviesscore{
		display: inline-block;
		width: 200px;
		font-style: oblique;
	}
	h1{
		display: inline-block;
	}
</style>
