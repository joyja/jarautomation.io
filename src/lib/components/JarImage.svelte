<script lang="ts">
export let src:string,
  lazySrc:string | null = null,
  alt:string | null = null,
  color = 'transparent',
  basis:number | string | null = '100%'
</script>

<div style:background-color={ color } class="content--img--wrapper">
  <img class="content--img" style:flex-basis={ basis } style="max-width: 100%" src={ src } placeholder={ lazySrc } alt={ alt }/>
</div>

<style>
.content--img--wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: calc(var(--spacing-unit) * 3)
}
.content--img {
  flex-shrink: 1;
  flex-grow: 0;
}
</style>