<template>
	<span
		class="inline-block rounded-full font-semibold select-none px-2 py-1"
		:class="[
			uppercase ? 'uppercase' : 'capitalize',
			category.toLowerCase(),
			active ? 'border-gray-800 border-2 shadow-lg' : 'shadow'
		]"
	>
		<slot>
			<span class="mdi mr-1" :class="iconKey" v-if="icon && iconKey" />
			<span>{{ category }}</span>
		</slot>
	</span>
</template>

<script>
	export default {
		props: {
			uppercase: {
				type: Boolean,
				default: true
			},
			category: String,
			icon: {
				type: Boolean,
				default: false
			},
			active: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			iconKey() {
				switch (this.category) {
					case "games":
						return "mdi-controller-classic";
					case "social":
						return "mdi-account-group";
					case "entertainment":
						return "mdi-movie-filter";
					case "animals":
						return "mdi-dog-side";
					default:
						return false;
				}
			}
		}
	};
</script>

<style lang="postcss">
	.games {
		@apply bg-gradient-to-tr from-pink-300 via-orange-400 to-red-400;
	}
	.social {
		@apply bg-gradient-to-bl from-teal-300 to-blue-400;
	}
	.entertainment {
		@apply bg-gradient-to-tl from-yellow-300 to-green-400;
	}
	.animals {
		@apply bg-gradient-to-bl from-purple-300 to-pink-400;
	}
</style>