<template>
	<div>
		<div class="nav">
			<div class="logo">
			影院订票系统
			</div>
			<div class="center">
					<ul>
						<li>
							<router-link to="/">
								<a href="javascript:void 0">首页</a>
							</router-link>
						</li>
						<li>
							<router-link to="/movies">
								<a href="javascript:void 0">电影</a>
							</router-link>
						</li>
						<li>
							<router-link to="/cinema">
								<a href="javascript:void 0">影院</a>
							</router-link>
						</li>
						<li>
							<router-link to="/list">
								<a href="javascript:void 0">榜单</a>
							</router-link>
						</li>
					</ul>
			</div>
			<div class="search">
				<input type="text" class="form-control" placeholder="找影视剧、影院">
				<button type="button" class="btn btn-primary">搜索</button>
			</div>
			<div class="user">
				<span class="user-login">
					<router-link to="/login">
					<a href="javascript:void 0">登录</a>
					</router-link>
				</span>
				<span class="user-login">
					<router-link to="/register">
						<a href="javascript:void 0">注册</a>
					</router-link>
				</span>
			</div>
			<div  :class="getLogin()?'name1':'name'">
				{{this.$store.state.name}}
				<ul class="nameul">
					<li>
						<router-link to="/record">
						<a href="#">购票记录</a>
						</router-link>
					</li>
					<li>
						<router-link to="/">
							<a @click="exit()">退出登录</a>
						</router-link>
						
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Nav',
		data:function(){
			return({
				
			})
		},
		methods:{
			getLogin(){
				var Login=this.$store.state.Login
				console.log(Login)
				return Login
			},
			exit(){
				this.$store.commit("Change",false)
			}
		},
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		user-select: none;
	}
	.nav{
		width: 2000px;
		height: 80px;
		background-color: white;
		border-bottom: #d8d8d8 solid 1px;
		
	}
	.logo{
		width: 250px;
		font-family:"楷体";
		color: #EF4238;
		font-size: 35px;
		line-height: 80px;
		padding-left: 25px;
		text-shadow: #D8D8D8 10px 10px ;
	}
	.center{
		height: 80px;
	}
	.center ul li{
		display: inline-block;
		height: 80px;
		width: 100px;
		text-align: center;
	}
	.center ul li a{
		display: inline-block;
		line-height: 80px;
		width: 100px;
		height: 80px;
	}
	.nav .search{
		margin-top: 20px;
		margin-left: 25px;
		height: 80px;
	}
	.nav .search .form-control{
		width: 250px;
		display: inline-block;
		margin-right: 50px;
	}
	.nav .search .btn{
		margin-top: -5px;
		width: 100px;
		display: inline-block;
	}
	.user{
		margin-left: 50px;
		position: relative;
		width: 150px;
		height: 80px;
		padding-top: 25px;
	}
	.user-login{
		margin-left: 25px;
	}
	.nav a{
		color: black;
		font-size: 20px;
	}
	.nav .center ul li:hover{
		background-color: #EF4238;
	}
	.nav .center ul li:hover a{
		color: white;
		text-decoration: none;
	}
	.name{
		display: none;
		z-index: 0;
	}
	.name1{
		width: 150px;
		height: 50px;
		background-color: #E9ECEF;
		position: relative;
		text-align: center;
		margin-top: 20px;
		margin-left: -150px;
		line-height: 50px;
		z-index: 3;
	}
	.name1 ul{
		list-style-type: none;
		display: none;
		background-color: white;
	}
	.name1 ul li{
		height: 50px;
		border-bottom: #95999C solid 1px;
		border-radius: 5px;
	}
	.name1 ul li{
		text-decoration: none;
	}
	.name1 ul li:hover{
		background-color: #B3B7BB;
	}
	.name1:hover{
		background-color: #EF4238;
	}
	.name1:hover ul{
		display: block;
	}
</style>
