<template>
	<div >
		<div class="come_soon_title">
			<div class="come_soon_title_right">
				即将上映
			</div>
		</div>
		<div class="come_soon_list">
			<ul>
				<li v-for="(item,index) in comesoon" :key="index">
					<img :src="item.movie_img" />
					<span>
						{{item.movie_date}}上映
					</span>
					<div class="movie_info">
						<div :title="item.movie_name"  class="movies_name">
							{{item.movie_name}}
						</div> 
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {comesoonapi} from  '../../api/index.js'
	export default{
		name:"comesoon",
		data:function(){
			return ({
				comesoon:[],
			})
		},
		async beforeMount() {
			await comesoonapi().then(res=>{
				this.comesoon=res.data
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
	.come_soon_title_right{
		color: #2d98f3;
		font-size: 26px;
		display: inline;
	}
	.come_soon_list ul {
		list-style-type: none;
	}
	.come_soon_list ul li{
		display: inline-block;
		height: 250px;
		width: 160px;
		margin-right: 30px;
		margin-top: 30px;
	}
	.come_soon_list ul li img{
		width: 160px;
		height: 220px;
	}
	span{
		display: block;
		width: 160px;
		height: 39px;
		text-align: center;
		line-height: 39px;
		border: #EFEFEF solid 1px;
	}
	.movie_info{
		height: 80px;
		width: 160px;
		margin-top: -120px;
		position: absolute;
		padding-left: 15px;
		padding-top: 40px;
		line-height: 39px;
		background-image:url(../../../public/img/back.png);
		z-index: 1;
		color: #D8D8D8;
	}
</style>
