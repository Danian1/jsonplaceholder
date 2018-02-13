<template>
  <div id="app">
    <header class="main-header container">
			<div class="page-title">
				<h1>
					<a href="/">JSONPlaceholder</a>
				</h1>
			</div>
		</header>
		<div class="container">
			<router-view/>
		</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
	header .page-title{
		font-size: 40px;
		text-align: center;
	}

	header .page-title a{
		text-decoration: none;
	}
  
	.container{
		width: 800px;
		margin: 0 auto;
	}
</style>
