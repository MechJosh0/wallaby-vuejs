<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<Cliploader color="blue" />
		<p>
			Hello from paragraph
		</p>
	</div>
</template>

<script>
	import Cliploader from 'vue-spinner/src/ClipLoader.vue';

	export default {
		components: { Cliploader },
		props: {
			msg: {
				type: String,
				required: true
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
