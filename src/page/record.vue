<template>
	<div class="record">
		<h1>购票记录：</h1>
		<ul v-if="Buymovies.length>0">
			<li v-for="(item ,index) in Buymovies" :key="index">
				<span>{{index+1}}</span>
				<img :src="item.movie_img" />
				<div class="imgadd">
					<p>第一放映厅</p>
					<p>放映时间：{{item.movies_time}}</p>
				</div>
				<div class="imgaddinfo">
					<router-link :to="{name:'tickinfo',params:{id:item.movie_id,name:item.movie_name,src:item.movie_img}}">
					详情>></router-link><br />
					票价：￥{{item.movie_price}}元
					<p @click="del(index)">删除该记录</p>
				</div>	
			</li>
		</ul>
		<div class="none" v-else>
			<h3>无购买记录</h3>
		</div>
	</div>
	
</template>

<script>
	import { hotplaymovieapi,Buyaddapi} from '../api/index.js'
	export default{
		name:"record",
		data:function(){
			return({
				movies:[],
				Buymoviesid:[],
				Buymovies:[]
			})
		},
		async created() {
			await hotplaymovieapi().then(res => {
				this.movies = res.data
			})
				this.Buymoviesid = this.$store.state.list.split("");
				for(let j=0;j<this.Buymoviesid.length;j++){
					for(let i=0;i<this.movies.length;i++){
						if(this.Buymoviesid[j] == this.movies[i].movie_id){
							this.Buymovies.push(this.movies[i])
					}
				}
			}
		},
		methods:{
			del:function(index){
				alert("确定删除该记录")
				this.Buymoviesid.splice(index,1);
				this.$store.commit("Changelist",this.Buymoviesid.join(""));
				Buyaddapi(this.$store.state.list,this.$store.state.tel).then(res =>{
					if(res.data["Buy"]){
						alert("删除成功")
						this.$router.push({ path:'/'})
					}
				} )
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		user-select: none;
	}
	.record{
		width: 1000px;
		margin-top: 100px;
		margin-left: 100px;
		position: absolute;
	}
	.record ul{
		list-style-type: none;
	}
	.record ul li{
		width: 800px;
		height: 150px;
		background-color: #EFEFEF;
		margin-left:50px;
		margin-top: 30px;
	}
	.record ul li span{
		display: inline-block;
		width: 50px;
		text-align: center;
		font-size: 30px;
	}
	.record ul li img{
		width: 96px;
		height: 132px;
		margin-top: 8px;
		margin-left: 15px;
	}
	.imgadd{
		display: inline-block;
		height: 150px;
		width: 500px;
		padding-left: 150px;
		padding-top: 20px;
		vertical-align: top;
		line-height: 50px;
		font-size: 24px;
	}
	.imgaddinfo{
		height: 130px;
		display: inline-block;
		position: absolute;
		line-height: 30px;
		padding-top: 30px;
		margin-top: 10px;
	}
	.none{
		width: 200px;
		height: 100px;
		margin-left: 400px;
	}
</style>
