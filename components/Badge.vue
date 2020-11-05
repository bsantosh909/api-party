<template>
	<span
		class="inline-block rounded-full font-semibold select-none px-2"
		:class="[uppercase ? 'uppercase' : 'capitalize']"
	>
		<slot></slot>
	</span>
</template>

<script>
	export default {
		props: {
			uppercase: {
				type: Boolean,
				default: true
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