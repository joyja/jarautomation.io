<script lang="ts">
let computers:{ make:string, model:string, processor:string, img:string }[] = []
</script>

<div class="row">
  <div class="column">
    <h1 class="title">Store</h1>
    <div class="computers">
      {#each computers as computer}
      <a href={`/store/products/${computer.make}-${computer.model}`} class="computer">
        <span class="computer__title">{ computer.model }</span>
        <img src={ computer.img } alt={ `${computer.make} ${computer.model}` }/>
        <span class="computer__processor">{ computer.processor }</span>
      </a>
      {/each}
    </div>
  </div>
</div>

<style lang="scss" scoped>
.computers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 150px));
  grid-template-rows: minmax(60px, 150px);
  grid-gap: calc(var(--spacing-unit) * 3);
  justify-content: center;
  position: relative;
  transition: transform .3s ease-out;
}
.computer {
  position: relative;
  background-color: var(--neutral-100);
  border-radius: var(--spacing-unit);
  border: none;
  transition: all .3s ease-out;
}
.computer > img {
  height: 100%;
  width: 100%;
}
.computer__title {
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
  font-family: Oswald;
  position: absolute;
  text-transform: uppercase;
}
.computer__processor {
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
  bottom: 0;
  font-family: Oswald;
}
.configurator {
  height: 600px;
  width: 600px;
  background-color: var(--neutral-100);
}
</style>