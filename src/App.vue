<template>
	<div>
		<div class="nav">
			<Nav></Nav>
		</div>
		<router-view></router-view>
		<div class="foot">
			<Foot></Foot>
		</div>
	</div>
</template>

<script>

import Nav from './components/common/nav.vue'
import Foot from './components/common/footer.vue'

export default {
  name: 'App',
  components: {
		Nav,
		Foot
  }
}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		user-select: none;
	}
	.nav{
		position: fixed;
		z-index: 3;
	}
	.foot{
		width: 100%;
		height: 200px;
		background-color: #262426;
		position: absolute;
		margin-top: 1500px;
	}
</style>
