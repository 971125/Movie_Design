<template>
	<div class="login_content">
		<div class="login">
			<h1>用户登录</h1>
			<form class="from">
				<label>手机号:</label>
				<input type="text" name="tel" v-model="tel" @change="telYan" placeholder="请输入注册的手机号"/>
				<p>
					<label>密码:</label>
					<input type="password" v-model="password" @change="passYan" name="pas" placeholder="请输入密码" />
				</p>
				<input type="checkbox" @click="userkno"/> <a>用户须知信息阅读>></a>  <br />  
				<button class="btn btn-success"  @click="login">登录</button>
			</form>
		</div>
		<div class="users">
			<user-know></user-know>
		</div>
	</div>
</template>

<script>
	import userKnow from  '../components/common/userKnow.vue'
	import {Loginapi} from '../api/index.js'
	export default{
		data:function(){
			return({
				tel:'',
				teltr:false,
				password:'',
				passwordtr:null,
				checked:null
			})
		},
		components:{
			userKnow
		},
		methods:{
			telYan:function(){
				var telRe=/^(1[3-9]{1})\d{9}$/;
				this.teltr=telRe.test(this.tel)
			},
			passYan:function(){
				var telRe=/^[(0-9)|(a-z)|(A-Z)]{6,}$/;
				this.passwordtr=telRe.test(this.password)
			},
			userkno:function(event){
				this.checked=event.target.checked
				console.log(this.checked)
			},
			login:function(event){
				if(!this.teltr||!this.passwordtr||!this.checked){
					event.preventDefault()
					alert("请输入正确的注册信息");
				}else{
					event.preventDefault()
					Loginapi(this.tel,this.password).then(res => {
						this.$store.commit("Change",res.data["login"])
						this.tel="",
						this.password="",
						this.checked=false,
						this.$router.push({ path:'/'})
						if(this.$store.state.Login){
							alert("登录成功")
							this.$store.commit("Changename",res.data["name"])
							this.$store.commit("Changelist",res.data["movies_list"])
							this.$store.commit("Changetel",res.data["tel"])
						}else{
							alert("手机号未注册")
							event.preventDefault()
						}
						
					})
				}
			}
		},
		beforeMount() {
			window.scrollTo(0, 0)
		}
	}
</script>

<style scoped>
	@import url("../../public/css/login_register.css");
	.btn{
		width: 250px;
		margin-top: 20px;
	}
</style>
