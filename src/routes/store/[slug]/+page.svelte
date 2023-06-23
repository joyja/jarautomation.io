<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';

	import PageHead from '$lib/components/PageHead.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>
<div class="row">
	<div class="column">
		<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />
		<ArticleTitle title={data.frontmatter.title} />
    <p class="meta">{data.frontmatter.description}</p>
    <div class="preview">
      <img width="200px" src={ data.inventoryData.img } alt={ data.inventoryData?.description }>
    </div>
		
		<div class="content">
			<svelte:component this={component} />
		</div>
	</div>
</div>

<style lang="scss">
  .meta {
    text-align: center;
    font-family: 'Basic';
    color: var(--gray-200);
  }
  .preview {
    margin-bottom: calc(var(--spacing-unit)*3);
    display:flex;
    justify-content: center;
    & > img {
      background-color: var(--white);
      border-radius: var(--rounded-md);
    }
  }
	:global(.content) {
		color: var(--gray-200);
		padding-right: calc(var(--spacing-unit) * 3);
		padding-left: calc(var(--spacing-unit) * 3);
	}
	:global(.content > p) {
		font-family: Basic;
		margin-bottom: calc(var(--spacing-unit) * 3);
	} 
	:global(.content > h2,h3) {
		font-family: Oswald !important;
		text-transform: uppercase;
	}
	:global(.content > ol) {
		font-family: Basic;
		list-style-type: decimal;
		list-style-position: outside;
	}
	:global(.content > ul) {
		font-family: Basic;
		list-style-type: disc;
		list-style-position: outside;
	}
	:global(.content > p > a) {
		color: var(--red-600);
		text-decoration: underline;
	}
	:global(.content > p > a:visited) {
		color: var(--red-800);
	}
	:global(main > p > img, main > p > a > img) {
		overflow: hidden;
		border-radius: var(--rounded-md);
		max-width: 100%;
	}
	:global(pre) {
		border-radius: var(--rounded-md);
	}
</style>
