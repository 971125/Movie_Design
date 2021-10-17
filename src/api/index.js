import axios from 'axios'
import qs from 'qs'



export const hotplaymovieapi = function() {
		return axios.post("http://localhost:8080/design/servlethotplay").then( res => res)
}

export const comesoonapi = function() {
		return axios.post("http://localhost:8080/design/Servletcomesoon").then( res => res)
}

export const Loginapi = function(tel,pas){
	let data = qs.stringify({
		"tel":tel,
		"pas":pas
	})
	return axios({
		method:"post",
		url:"/design/ServletLogin",
		data:data
	}).then(res => res)
}

export const Registerapi = function(username,telphone,password){
	let data = qs.stringify({
		"username":username,
		"telphone":telphone,
		"password":password
	})
	return axios({
		method:"post",
		url:"/design/ServletRegister",
		data:data
	}).then(res => res)
}

export const Buyaddapi = function(list,tel){
	let data = qs.stringify({
		"list":list,
		"tel":tel,
	})
	return axios({
		method:"post",
		url:"/design/ServletBuyadd",
		data:data
	}).then(res => res)
}
export const Buytickapi = function(id,tel,row,col,seats){
	let data = qs.stringify({
		"movie_id":id,
		"tel":tel,
		"row":row,
		"col":col,
		"teats":seats
	})
	return axios({
		method:"post",
		url:"/design/Servlettick",
		data:data
	}).then(res => res)
}

export const TickInfoapi = function(tel,id){
	let data = qs.stringify({
		"tel":tel,
		"id":id
	})
	return axios({
		method:"post",
		url:"/design/ServletShowtick",
		data:data
	}).then(res => res )
}