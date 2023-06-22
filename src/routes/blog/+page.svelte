<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="row">
  <div class="column">
    <h1 class="title">Blog</h1>
    <div class="cards">
        {#each data.posts as { slug, title, author, description, date, image, imageColor }}
          <a 
            style:background-color={ imageColor || 'white' }
            href={ `/blog/${slug}` } 
            class="card"
          >
            <img class="rounded" src={ image } alt={ title }/>
            <div class="card__title">{ title }</div>
          </a>
        {/each}
      </div>
  </div>
</div>


<style lang="scss">
@import '../../css/boxShadow.scss';
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: calc(var(--spacing-unit) * 3);
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: var(--spacing-unit);
  aspect-ratio: 1;
  @extend .shadow-md;
  transition: all .3s ease-out;
  cursor: pointer;
  overflow: hidden;
}
.card:hover {
  transform: scale(1.1) rotate(-1deg);
}
.card__title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: Oswald;
  text-transform: uppercase;
  position: absolute;
  background-color: rgba(var(--gray-600--rgb),0.7);
  padding: var(--spacing-unit);
  color: white;
  margin: auto;
  left: 0;
  right: 0;
  min-height: calc(2 * var(--text-md-lh));
  z-index: 2;
  transition: background-color .3s ease-out;
}
.card:hover > .card__title {
  background-color: rgba(var(--red-600--rgb),0.7);
}
.content > p {
  margin-bottom: calc(var(--spacing-unit) * 3);
}
</style>