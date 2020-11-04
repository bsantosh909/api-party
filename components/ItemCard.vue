<template>
	<div class="bg-gray-200 border shadow hover:shadow-lg rounded-md p-4 w-84">
		<div align="center">
			<img
				src="https://via.placeholder.com/128"
				alt="logo"
				title="API logo"
				class="w-24 h-24 rounded-full mb-2"
			/>
			<span class="text-xl font-semibold mx-auto my-auto">
				{{ details.name }}
			</span>
			<span
				class="mdi mdi-check-decagram mdi-24px text-blue-400"
				v-if="details.official"
				title="Official API"
			/>
		</div>
		<div class="text-center border-gray-400 border-t border-b my-3 py-3">
			<span>{{ details.description }}</span>
		</div>
		<div>
			<span class="mdi mdi-link-variant mdi-18px mr-1" />
			<span>Base API url: </span>
			<a
				:href="details.apiUrl"
				class="text-blue-500 visited:text-purple-600"
				target="_blank"
			>
				Click Here
			</a>
		</div>
		<div v-if="details.docs">
			<span class="mdi mdi-book-open-variant mdi-18px mr-1" />
			<span>Documentation: </span>
			<a
				:href="details.docs"
				class="text-blue-500 visited:text-purple-600"
				target="_blank"
			>
				Click Here
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			details: Object
		}
	};
</script>