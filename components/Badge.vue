<template>
	<span
		class="inline-block rounded-full font-semibold select-none px-2"
		:class="[color, uppercase ? 'uppercase' : 'capitalize']"
	>
		<slot></slot>
	</span>
</template>

<script>
	export default {
		props: {
			color: {
				type: String,
				default: "bg-yellow-300"
			},
			uppercase: {
				type: Boolean,
				default: true
			}
		}
	};
</script>