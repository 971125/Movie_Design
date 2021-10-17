<template>
  <div>
		<div class="content">
			<div class="hot-play">
				<Hotplay></Hotplay>
			</div>
			<div class="aside">
				<Aside></Aside>
			</div>
			<div class="come_soon">
				<Comesoon></Comesoon>
			</div>
			<div class="aside1">
				<come-aside></come-aside>
			</div>
		</div>
  </div>
</template>

<script>
	
	import Hotplay from '../components/index/hotplay.vue'
	import Aside from '../components/index/aside.vue'
	import Comesoon from '../components/index/comesoon.vue'
	import comeAside from '../components/index/comeAside.vue'
	export default {
  name: 'Content',
  props: {
  },
	components:{
		Hotplay,
		Aside,
		Comesoon,
		comeAside
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
		user-select: none;
	}
	
	.content{
		width: 100%;
		
	}
	.hot-play{
		width: 800px;
		margin-top: 62px;
		margin-left: 30px;
		z-index: 1;
		position: absolute;
	}
	.aside{
		width: 360px;
		height: 500px;
		margin-top: 62px;
		margin-left: 430px;
		position: absolute;
		float: right;
		left: 0px;
		padding-left: 30px;
		z-index: 0;
	}
	.come_soon{
		width: 800px;
		margin-top: 800px;
		margin-left: 60px;
		position: absolute;
	}
	.aside1{
		width: 360px;
		height: 800px;
		position: absolute;
		margin-top: 740px;
		margin-left: 420px;
		float: right;
		left: 0;
		padding-left: 30px;
	}
</style>
