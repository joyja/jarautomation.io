<script>
  import '@fontsource/oswald'
	import '@fontsource/basic'
  import '@fontsource/lobster'
	import JarFooter from "../lib/components/JarFooter.svelte";
	import PageTransition from '../lib/components/PageTransition.svelte';
  import JarHeader from "../lib/components/JarHeader.svelte";
  import '../css/main.scss'
  export let data
</script>

<JarHeader />
<PageTransition pathname={data.pathname}>
  <slot />
</PageTransition>
<JarFooter />

<style lang="scss">
:global(body) {
  position: relative;
  background-image: url('/waterOnGlass.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-color: var(--neutral-900);
  min-height: calc(100vh - 102px + var(--spacing-unit) * 4);
  padding-bottom: calc(60px + var(--spacing-unit) * 4);
}
</style>