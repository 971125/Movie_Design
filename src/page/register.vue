<template>
	<div class="login_content">
		<div class="login">
			<h1>用户注册</h1>
			<div class="Yanz">
				<div id="Ylabel">
					<label v-show="userNametr">
					*用户名不能为空*
					</label>
				</div>
				<div id="Ylabel">
					<label  v-show="teltr">
					*手机号不合法*
					</label>
				</div>
				<div id="Ylabel">
					<label v-show="passwordtr">
					*密码至少六位*
					</label>
				</div>
				<div id="Ylabel">
					<label v-show="password2tr">
					*两次密码不同*
					</label>
				</div>
				
			</div>
			<form class="from" method="post">
				<p>
				<label>用户名:</label>
				<input type="text" name="username" v-model="userName" @change="text" placeholder="请输入用户名"/>
				</p>
				<p>
				<label for="tel">手机号:</label>
				<input type="text" name="telphone" id="tel" @change="text1" v-model="tel" placeholder="请输入手机号"/>
				</p>
				<p>
					<label>密码:</label>
					<input type="password" name="password" v-model="password" @change="text2" placeholder="请输入密码" />
				</p>
				<p>
					<label>确认密码:</label>
					<input type="password" v-model="password2" @change="text3" placeholder="请再输入密码" />
				</p>
				<input name="userknow" type="checkbox" @click="userkno"/> <a>用户须知信息阅读>></a>  <br />  
				<button class="btn btn-primary" @click="register">注册</button>
				<button type="reset" class="btn btn-info">重置</button>
			</form>
		</div>
		<div class="users">
			<user-know></user-know>
		</div>
	</div>
</template>

<script>
	import userKnow from  '../components/common/userKnow.vue' 
	import {Registerapi} from "../api/index.js"
	export default {
		name:"register",
		components:{
			userKnow
		},
		data:function(){
			return({
					userName:null,
					userNametr:null,
					tel:null,
					teltr:null,
					password:null,
					passwordtr:null,
					password2:"",
					password2tr:null,
					userknow:false
			})
		},
		methods:{
			text:function(){
				if(this.userName==null||this.userName==""){
					this.userNametr=true
				}else{
					this.userNametr=false
				}
			},
			text1:function(){
				var telRe=/^(1[3-9]{1})\d{9}$/;
				this.teltr=!telRe.test(this.tel)
			},
			text2:function(){
				var telRe=/^[(0-9)|(a-z)|(A-Z)]{6,}$/
				console.log(telRe.test(this.password))
				this.passwordtr=!telRe.test(this.password)
				this.text3()
			},
			text3:function(){
				if(this.password==this.password2){
					this.password2tr = false;
				}else{
					this.password2tr = true
				}
			},
			userkno:function(event){
				this.userknow=event.target.checked
				console.log(this.userknow)
			},
			register:function(event){
				if(this.userknow&&!this.passwordtr&&!this.password2tr&&!this.userNametr&&!this.teltr&&this.password2!=""){
					Registerapi(this.userName,this.tel,this.password).then(res => {
						if(res.data["Register"]){
							alert("注册成功")
							this.$router.push({ path:'/login'})
						}else{
							alert("手机号已经注册")
						}
					})
				}
				else{
					event.preventDefault();
					alert("请填写正确信息")
				}
			}
		},
		beforeMount() {
			window.scrollTo(0, 0)
		}
	}
</script>

<style scoped>
	*{
		
	}
	@import url("../../public/css/login_register.css");
	.btn{
		width: 150px;
		margin-top: 50px;
		margin-left: 30px;
	}
	.Yanz{
		width: 180px;
		height: 300px;
		position: absolute;
		margin-left: 600px;
		margin-top: 20px;
	}
	.Yanz label{
		width: 180px;
		text-align: left;
		font-size: 16px;
		margin-left: 30px;
		color: red;
		font-weight: 800;
	}
	#Ylabel{
		margin-top: 10px;
		height: 70px;
		width: 180px;
	}
</style>
