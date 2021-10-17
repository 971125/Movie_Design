<template>
	<div class="tickinfo">
		<div class="title">
			<h2>订单详情</h2>
			<div class="info">
				<img :src="src" />
				<div class="inforight">
					<p>电影名称:{{name}}</p>
					<p>订单时间:{{date}}</p>
					<p>座位号:{{rol}}排{{col}}号</p>
					<p>票据状态:{{this.watchstate()}}</p>
				</div>
			</div>
			<div class="qrcode" ref="qrCodeUrl">
				
			</div>
		</div>
	</div>
</template>

<script>
	import { TickInfoapi } from '../api/index.js'
	import QRCode from 'qrcodejs2'
	export default{
		name:"tickInfo",
		data:function(){
			return({
				name:this.$route.params.name,
				src:this.$route.params.src,
				tel:this.$store.state.tel,
				id:this.$route.params.id,
				rol:'',
				col:'',
				date:'',
				watch:'',
				Infos:''
			})
		},
		async created() {
			await TickInfoapi(this.tel,this.id).then(res =>{
				this.rol = res.data["row"]
				this.col = res.data["col"]
				this.date = res.data["tick_date"]
				this.watch = res.data["watch"]
				this.Info()
				this.creatQrCode()
			})
		},
		methods:{
			creatQrCode() {
				new QRCode(this.$refs.qrCodeUrl, {
					text: this.Infos, 
					width: 150,
					height: 150,
					colorDark: '#000000',
					colorLight: '#ffffff'
				})
			},
			watchstate(){
				if(this.watch == "0" ){
					return "未观看"
				}else{
					return "已观看"
				}
			},
			Info(){
				this.Infos = "购买账户为"+this.tel+"购买日期为"+this.date+"观看状态为"+this.watchstate()+"购买电影名"+this.name
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
	.tickinfo{
		width: 1000px;
		margin-top: 100px;
		position: absolute;
	}
	.title{
		width: 50%;
		text-align: center;
		margin: 0 auto;
		border: #000 solid 1px;
	}
	.title img{
		display: inline-block;
		vertical-align: top;
	}
	.info{
		width: 100%;
		/* height: 500px; */
		text-align: left;
		padding-left: 50px;
		padding-top: 50px;
		padding-bottom: 50px;
		border-top: #000000 solid 1px;
		border-bottom: #000000 solid 1px;
	}
	.inforight {
		width: 50%;
		padding-top: 20px;
		margin-left: 30px;
		display:inline-block
	}
	.qrcode{
			display: inline-block;
			img {
				width: 180px;
				height: 180px;
				background-color: #fff; 
				padding: 6px; 
				box-sizing: border-box;
			}
	}
</style>