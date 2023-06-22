<script>
import Jar3dLogo from "./Jar3dLogo.svelte";
</script>

<nav class="header">
  <a href="/">
    <div class="logo">
      <Jar3dLogo/>
    </div>
    <p class="logo__text">Automation</p>
  </a>
</nav>

<style lang="scss">
@import 'src/css/breakpoints.scss';

.logo {
  transition: height .3s ease-out;
  height: 60px;
  @include bpmd {
    height:100px;
  }
}
.logo__text {
  transition: font-size .3s ease-out;
  font-size: 1rem;
  font-family: Lobster;
  color: var(--neutral-300);
  transform: rotate(-3deg) translateY(-0.25rem) translateX(0.5rem);
  transform-origin: left;
  @include bpmd {
    font-size: 2rem;
  }
}
.header {
  padding: calc(var(--spacing-unit)*3);
  height: 60px;
}
</style>