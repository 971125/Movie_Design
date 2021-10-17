<template>
	<div class="moviesInfocount">
				<div class="moviesInfo">
				<img :src="movies.movie_img"/>
				<div class="Info">
					<h2>{{movies.movie_name}}</h2>
					<p>{{movies.movies_type}}</p>
					<p>中国大陆/{{movies.movies_length}}分钟</p>
					<p>
						{{movies.movie_date}} 18:00中国大陆上映
					</p>
					<p>
						<button class="btn btn-danger" @click="buytick">购票</button>
					</p>
				</div>
				<div class="score">
					<p>口碑</p>
					<span>{{movies.movie_score}}</span>
					<p>累计票房</p>
					<span>{{movies.movie_mony}}</span>·KW
					<div class="price">
						票价：￥{{movies.movie_price}}
					</div>
				</div>
				<div class="aside">
					<div class="screen"></div>
					<span class="screens">电影荧幕</span>
					<div class="lie">1 2 3 4 5</div>
					<ul>
						<li v-for="(items,index) in seats" :key="index">
							<ul >
								<li  v-for="(item,index) in items" :data-set="item" v-show="item != 1" :class=" item== 2 ? 'xuan':' weixuan'"  :key="index">	{{index+1}}
								</li>
							</ul>
						</li>
					</ul>
					
				</div>
			</div>
			<div class="synopsis">
				<label>简介</label>
				<p>{{movies.movie_intr}}</p>
			</div>
			<div v-show="Buytr" class="Buy show">
				确定购买<br />
				<span style="font-size: 16px; font-style: normal;color: #000000;display: block;">
					请选择位置：
					<select v-model="row" @change="Change()">
						<option value="1" selected="selected">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>排
					<select v-model="col" @click="Change()">
						<option v-for="(item,index) in cols" :key="index">{{item}}</option>
					</select>号
				</span>
				<button class="btn btn-danger" @click="Buy">支付</button>
				<button style="margin-left: 150px;" @click="noshow" class="btn btn-danger">取消</button>
			</div>
	</div>
	
</template>

<script>
	import {hotplaymovieapi,Buyaddapi,Buytickapi} from '../api/index.js'
	export default{
		name:"moviesInfo",
		data:function(){
			return({
				data:this.$route.params.id,
				Login:false,
				tel:'',
				list:'',
				movies:[],
				Buytr:false,
				seats:[],
				col:1,
				row:1,
				cols:3
			})
		},	
		beforeMount() {
			window.scrollTo(0, 0);
		},
		async created() {
			hotplaymovieapi().then((res)=>{
				for(let i=0;i<res.data.length;i++){
					if(res.data[i].movie_id == this.data)
					{
						this.movies=res.data[i];
					}
				}
				var seat = this.movies.seats;
				var seatarr = seat.split(",")
				for(let j=0;j<seatarr.length;j++){
					this.seats.push(seatarr[j].split("")) 
				}
			})
		},
		methods:{
			buytick:function(){
				this.Login=this.$store.state.Login
				if(!this.Login){
					alert("请先登录")
				}
				else{
					this.Buytr=true
				}
			},
			noshow:function(){
				var Buy=document.getElementsByClassName("Buy show")[0]
				Buy.parentNode.removeChild(Buy)
			},
			Buy:function(){
				this.list = this.$store.state.list
				this.tel=this.$store.state.tel
				var listArr = this.list.split("")
				if(this.seats[this.row-1][this.col-1] == 0){
					this.seats[this.row-1][this.col-1] = 2
					var seatarr = []
					for(let i =0; i<this.seats.length;i++){
						seatarr.push(this.seats[i].join(""))
					}
					var seatring=seatarr.join(",");
					console.log(seatring)
					Buytickapi(this.data,this.$store.state.tel,this.row,this.col,seatring).then(res => {
						console.log(res)
						if(res.data["OK"]){
							if(listArr.indexOf(this.data)>0){
								alert("已经都买了")
								this.$router.push({ path:'/'})
							}else{
								listArr.push(this.data)
								console.log(listArr.join(""))
								Buyaddapi(listArr.join(""),this.tel).then(res => {
									if(res.data["Buy"]){
										alert("购买成功")
										this.$store.commit("Changelist",listArr.join(""))
										this.$router.push({ path:'/'})
									}
								})
							}
						}else{
							alert("购买失败")
						}
					} )
				}
				else{
					alert("座位已售出")
				}
			},
			Change:function(){
				if(this.row == 1 ){
					this.cols = 3
				}else if(this.row == 2 ){
					this.cols = 4
				}else{
					this.cols = 5
				}
			}
		}
	}
</script>

<style scoped>
	
	.moviesInfocount{
		width: 1300px;
		height: 800px;
		position: absolute;
	}
	.moviesInfo{
		width: 1300px;
		height: 800px;
		margin-top: 100px;
		margin-left: 30px;
		position: absolute;
		background-image: url(../../public/img/moviesInfo.png);
		background-repeat: no-repeat;
	}
	img{
		width: 240px;
		height: 330px;
		background-color: #ffffff;
		padding: 5px;
		margin-top: 80px;
		margin-left: 50px;
	}
	label{
		margin-left: 20px;
		font-size: 20px;
		text-align: center;
		border-bottom: #EF4238 solid 1px;
	}
	.Info{
		width: 200px;
		height: 250px;
		position: absolute;
		color: white;
		display: inline-block;
		margin-top: 80px;
		margin-left: 25px;
	}
	.score{
		width: 100px;
		height: 250px;
		position: absolute;
		color: white;
		display: inline-block;
		margin-top: 150px;
		margin-left: 300px;
	}
	.price{
		width: 150px;
		position: absolute;
		font-size: 20px;
	}
	h2{
		font-size: 26px;
		font-weight: 700;
	}
	p{
		font-size: 14px;
	}
	.btn{
		margin-top: 50px;
		width: 200px;
	}
	span{
		color: #ffb400;
		font-size: 30px;
		font-style: oblique;
	}
	.synopsis{
		width: 800px;
		height: 300px;
		position: absolute;
		margin-top: 550px;
		margin-left: 30px;
		border: #D8D8D8 solid 1px;
	}
	.synopsis p{
		font-size: 16px;
		text-indent: 30px;
		margin-left: 25px;
	}
	.Buy{
		width: 630px;
		height: 300px;
		background-color: rgba(255,255,255,0.9);
		position: relative;
		top: 150px;
		margin: auto;
		color: #000;
		font-size: 40px;
		padding-top: 50px;
		text-align: center;
		border-radius: 10px;
	}
	.show{
		display: block;
	}
	.noshow{
		display: none;
	}
	.aside{
		width: 300px;
		height: 250px;
		margin-top: -320px;
		margin-left: 950px;
		position: absolute;
		border: #000 solid 1px;
	}
	.aside ul{
		list-style-type: none;
		display: inline-block;
		text-align: center;
		margin-left: 20px;
	}
	
	.aside ul li ul{
		list-style-type: none;
		text-align: center;
	}
	.aside ul li ul li{
		display: inline-block;
		height: 20px;
		width: 20px;
		margin-right: 30px;
		margin-top: 15px;
		text-align: center;
		line-height: 20px;
		border: #000000 solid 1px;
	}
	.weixuan{
		background-color: #00ff00;
	}
	.xuan{
		background-color: #ff0000;
	}
	.screen{
		width: 100%;
		border-top: #666666 solid 50px;
		border-left: rgba(0,0,0,0)  solid 60px;
		border-right: rgba(0,0,0,0) solid 60px;
	}
	.screens{
		width: 330px;
		height: 50px;
		display: inline-block;
		text-align: center;
		color: white;
		font-weight: 700;
		position: absolute;
		margin-top: -50px;
		margin-left: -20px;
		z-index: 2;
	}
	.lie{
		width: 10px;
		height: 180px;
		background-color: #454D55;
		display: inline-block;
		position: absolute;
		margin-top: 10px;
		color: white;
		line-height: 38px;
		border-radius: 5px;
	}
</style>
