<script>
	import { blur } from 'svelte/transition'
	import { page } from '$app/stores'
	export let pathname = ''
</script>

{#key pathname}
	<main
		in:blur={{ duration: 300, amount: 20, delay: 500 }} out:blur={{ duration: 300, amount: 20  }}
	>
		<slot />
</main>
{/key}

<style lang="scss">
main {
	position: relative;
	z-index: 0;
}
@media (min-width: 0px) {
  .transitor {
		margin-top: 12rem;
	}
	.transitorpost {
		margin-top: 8rem;
	}
}
@media (min-width: 768px) {
  .transitor {
		margin-top: 10rem;
	}
	.transitorpost {
		margin-top: 8rem;
	}
}
.transitor {
	flex-grow: 1;
	transition: margin-top .3s ease-out;
	// position: relative;
}
.transitorpost {
	flex-grow: 1;
	transition: padding-top .3s ease-out;
	// position: relative;
}
</style>