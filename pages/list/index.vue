<template>
	<div class="container mx-auto">
		<div class="pb-10 mb-10 mx-4 text-center border-b">
			<span class="font-semibold text-3xl">Categories</span>
			<div class="pt-4">
				<button
					v-for="(cat, i) of categories"
					:key="i"
					@click="setCategory(cat.toLowerCase())"
					class="m-2 focus:outline-none"
				>
					<Badge
						:uppercase="false"
						class="text-sm px-3"
						:color="filters.category === cat ? 'bg-green-500' : 'bg-green-300'"
					>
						{{ cat }}
					</Badge>
				</button>
			</div>
		</div>
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
					search: "",
					category: null
				}
			};
		},
		computed: {
			list() {
				return this.apiList
					.filter((api) => {
						if (this.filters.category === null) return true;
						else if (api.categories.includes(this.filters.category)) return true;
						else return false;
					})
					.filter((api) => {
						const query = this.filters.search.toLowerCase();
						return (
							api.name.toLowerCase().includes(query) ||
							api.description.toLowerCase().includes(query)
						);
					})
					.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
			},
			categories() {
				const list = [];
				this.apiList
					.reduce((r, e) => (r.push(...e.categories), r), [])
					.forEach((itm) => {
						if (!list.includes(itm)) list.push(itm.toLowerCase());
					});
				return list;
			}
		},
		methods: {
			setCategory(id) {
				let cat = id;
				if (id === this.filters.category) cat = null;
				this.filters.category = cat;
			}
		}
	};
</script>