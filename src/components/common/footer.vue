<template>
	<div class="footer">
		<div class="Info">
			关于该系统:
			<ul>
				<li>
					关于我们
				</li>
				<li>
					关于客服
				</li>
				<li>
					关于团队
				</li>
			</ul>
			<br />
			友情链接:
			<ul>
				<li>
					猫眼
				</li>
				<li>
					淘票票
				</li>
				<li>
					美团
				</li>
				<li>
					格瓦拉
				</li>
			</ul>
			<p>
				商务合作邮箱：v@maoyan.com 客服电话：10105335 违法和不良信息举报电话：4006018900
			</p>
			<p>
				用户投诉邮箱：tousujubao@meituan.com 舞弊线索举报邮箱：wubijubao@maoyan.com
			</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"foot"
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		user-select: none;
	}
	.foot{
		background-color: #262426;
	}
	.Info{
		margin-top: 50px;
		color: white;
		width: 100%;
		font-size: 14px;
		text-align: center;
	}
	.Info ul{
		list-style-type: none;
		display: inline;
	}
	.Info ul li{
		display: inline-block;
		height: 14px;
		width: 100px;
		line-height: 14px;
		color: #EF4238;
		border-right: #ffffff solid 1px ;
	}
	.Info ul li:last-child{
		border: none;
	}
</style>
