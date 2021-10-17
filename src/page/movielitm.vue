<template>
	<div class="movieitem">
		<img :src="src" />
		<div class="movieitemname">{{name}}</div>
	</div>
</template>

<script>
	export default {
		name:"movielitem",
		props:["src","name"]	
	}
</script>

<style scoped>
	.movieitem{
		width:160px;
		height: 250px;
		background-color: #E2E6EA;
		margin-left: 60px;
		margin-top: 50px;
		display: inline-block;
	}
	img{
		width: 160px;
		height: 220px;
	}
	.movieitemname{
		height: 39px;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
