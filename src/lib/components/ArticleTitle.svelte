<script lang="ts">
	export let slug = '';
	export let title: string;

	const id = title
		.toLowerCase()
		.replace(/[^a-zA-Z ]/g, '')
		.replace(/\s/g, '-');

	const href = slug ? `/posts/${slug}` : '#' + id;
</script>

{#if slug}
	<h3 class="heading title" class:large={!slug} {id}>
		<a {href}>
			{title}
		</a>
	</h3>
{:else}
	<h1 class="heading title" class:large={!slug} {id}>
		<a {href}>
			{title}
		</a>
	</h1>
{/if}

<style>
	h1 {
		margin:0;
		margin-top: calc(var(--spacing-unit) * 3);
	}

	h3 {
		margin:0;
		margin-top: calc(var(--spacing-unit) * 3);
	}

	.heading {
		font-size: var(--text-3xl);
		line-height: var(--text-3xl-h);
	}

	.large {
		font-size: var(--text-4xl);
		line-height: var(--text-4xl-h);
	}
</style>
