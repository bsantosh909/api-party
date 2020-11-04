<template>
	<div class="bg-gray-200 border shadow hover:shadow-lg rounded-md p-4 w-84">
		<div align="center">
			<img
				src="https://via.placeholder.com/96"
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
		<div class="text-center mt-3">
			<Badge
				v-for="(cat, i) of details.categories"
				:key="i"
				class="mx-1 text-xs"
				:color="getBadgeColor(cat)"
			>
				{{ cat }}
			</Badge>
		</div>
		<div class="text-center border-gray-400 border-t border-b my-3 py-2">
			<span>{{ details.description }}</span>
		</div>
		<div v-if="details.apiUrl && !details.auth">
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
		<div v-if="details.auth">
			<span class="mdi mdi-key mdi-18px mr-1" />
			<span>Authentication: </span>
			<span class="font-semibold">{{ apiAuth }}</span>
		</div>
	</div>
</template>

<script>
	import { getColor } from "@/assets/badge";

	export default {
		props: {
			details: Object
		},
		computed: {
			apiAuth() {
				switch (this.details.auth) {
					case 1:
						return "API Key";
					case 2:
						return "OAuth";
					default:
						return "None";
				}
			}
		},
		methods: {
			getBadgeColor(id) {
				return getColor(id);
			}
		}
	};
</script>