<template>
    <div class="row">
        <div class="col-5 card" v-for="user in users">
            <h3>{{ user.name }}</h3>
            <p><i class="fa fa-user-o"></i> {{ user.username }}</p>
            <p><i class="fa fa-envelope"></i> {{ user.email }}</p>
            <p><i class="fa fa-phone"></i> {{ user.phone }}</p>
            <p><i class="fa fa-internet-explorer"></i> {{ user.website }}</p>
            <p><i class="fa fa-map-pin"></i> {{ user.address.city }}, {{ user.address.street }}, {{ user.address.suite }}</p>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'Users',
		data: () => {
			return {
				users: [],
				loadPosition: 0
			}
		},
		created() {
			this.getUsers();
		},
		methods: {
			getUsers() {
				this.$http.get('https://jsonplaceholder.typicode.com/users')
				.then(
					(success) => {
						for(let i = 0; i < success.body.length; i++) {
							if(i < 10){
								this.users.push(success.body[i]);
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
    .card{
        padding: 10px;
        margin: 10px;
    }
</style>