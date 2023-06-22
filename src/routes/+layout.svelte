<script>
  import '@fontsource/oswald'
	import '@fontsource/basic'
	import JarFooter from "../lib/components/JarFooter.svelte";
	import PageTransition from '../lib/components/PageTransition.svelte';
  import JarHeader from "../lib/components/JarHeader.svelte";
  import '../css/main.scss'
  export let data
</script>

<div class="app">
  <JarHeader />
  <PageTransition pathname={data.pathname}>
    <slot />
  </PageTransition>
  <JarFooter />
</div>

<style lang="scss">
.app {
  position: relative;
  background-image: url('/waterOnGlass.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-color: var(--neutral-900);
  min-height: calc(100vh - 102px + var(--spacing-unit) * 4);
  padding-bottom: calc(60px + var(--spacing-unit) * 4);
}
</style>