<template>
	<div class="hot-play" >
		<div class="hot-title">正在热映</div>
		<div class="hot-active">
			<ul>
				
				<li v-for="(item,index) in movies" :key="index">
					<router-link :to="{name:'moviesInfo',params:{id:item.movie_id}}">
					<a href="javascript:void (0)">
					<div class="movie_info">
						<div :title="item.movie_name"  class="movies_name">
							{{item.movie_name}}
						</div> 
						<div class="movie_score">
							{{item.movie_score}}
						</div>
					</div>
					<img :src="item.movie_img" />
					</a>
					<span>
						<a href="javascript:void (0)">
							购票
						</a>
					</span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { hotplaymovieapi } from '../../api/index.js'
	export default{
		name:'hotplay',
		props:{
			
		},
		data(){		
			return(
				{
					movies:[]	
				}
			)
								
		},
		async created() {
			hotplaymovieapi().then((res)=>{
				this.movies=res.data;
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
	.hot-title{
		font-size: 26px;
		color: #EF4238;
		display: inline;
	}
	.hot-active ul{
		list-style: none;
	}
	.hot-active ul li{
		display: inline-block;
		width: 160px;
		margin-right: 30px;
		margin-top: 30px;
	}
	.hot-active ul li img{	
		width: 160px;
		height: 220px;
	}
	.movie_info{
		height: 80px;
		width: 160px;
		margin-top: 140px;
		position: absolute;
		padding-left: 15px;
		padding-top: 40px;
		line-height: 39px;
		background-image:url(../../../public/img/back.png);
		z-index: 1;
		color: #D8D8D8;
	}
	.movies_name{
		display: inline-block;
		width: 100px;
		height: 39px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.movie_score{
		display: inline-block;
		margin-left: 10px;
		width: 35px;
		height: 39px;
		color: #ffb400;
		font-size: 20px;
		overflow: auto;
		font-style: oblique;
	}
	.hot-active ul li span{
		display: inline-block;
		height: 39px;
		width: 160px;
		border: #efefef 1px solid;
		border-top: none;
		text-align: center;
		line-height: 39px;
		/* background-color: #EF4238; */
	}
	.hot-active ul li span a{
		display: inline-block;
		height: 39px;
		width: 160px;
		color: #EF4238;
	}
	.hot-active ul li span:hover{
		background-color: #EF4238;
	}
	.hot-active ul li span:hover a{
		color: white;
		text-decoration: none;
	}
</style>
