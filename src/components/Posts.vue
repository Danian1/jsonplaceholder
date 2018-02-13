<template>
	<div>
		<article v-for="post in posts">
			<div class="card-content">
				<h1 class="title">
					<p>{{ post.title }} </p>
				</h1>
				<p> {{ post.body }} </p>
			</div>
		</article>
	</div>
</template>

<script>
	export default {
		name: 'Posts',
		data: () => {
			return {
				posts: [],
				loadPosition: 0
			}
		},
		created() {
			this.getPosts()
		},
		methods: {
			getPosts() {
				this.$http.get('https://jsonplaceholder.typicode.com/posts')
				.then(
					(success) => {
						for(let i = 0; i < success.body.length; i++) {
							if(i < 10){
								this.posts.push(success.body[i]);
								this.loadPosition = i;
							}
						}
					},
					(error) => {
						console.log(error);
					}
				)
			}
		}
	}
</script>

<style>
	.card-content{
		margin-top: 100px;
	}
	.title{
		font-size: 18px;
		color:brown;
		text-transform: uppercase;
	}
	.user{
		color:blue;
		font-size: 20px;
	}
</style>