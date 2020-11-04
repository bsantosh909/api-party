<template>
	<div class="container mx-auto">
		<div class="mb-16 mx-4">
			<label
				class="block text-gray-600 font-bold mb-2 text-center"
				for="search-area"
			>
				<span class="mdi mdi-magnify mdi-18px mr-1" />
				<span>Search for API</span>
			</label>
			<input
				class="bg-gray-200 shadow-lg appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:shadow-none focus:outline-none focus:bg-gray-100 focus:border-purple-400"
				id="search-area"
				type="text"
				placeholder="Enter API name"
				v-model="filters.search"
			/>
		</div>
		<div class="flex flex-wrap justify-center">
			<ItemCard
				v-for="api in list"
				:key="api.id"
				:details="api"
				class="mx-6 my-4"
			/>
			<div v-if="!list.length">No API available matching the filters</div>
		</div>
	</div>
</template>

<script>
	import { apiList } from "@/assets/apiList";

	export default {
		data() {
			return {
				apiList,
				filters: {
					search: ""
				}
			};
		},
		computed: {
			list() {
				return (
					this.apiList
						/*
												.filter(
													(api) =>
														api.name.toLowerCase().includes(this.filters.search) ||
														api.description.toLowerCase().includes(this.filters.search)
												)*/
						.filter((api) => {
							const query = this.filters.search.toLowerCase();
							return (
								api.name.toLowerCase().includes(query) ||
								api.description.toLowerCase().includes(query)
							);
						})
						.sort((a, b) =>
							a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
						)
				);
			}
		}
	};
</script>