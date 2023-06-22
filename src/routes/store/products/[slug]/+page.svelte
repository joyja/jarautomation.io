<script setup>
</script>

  <template>
  <div class="row">
    <div class="column">
      <ContentDoc v-slot="{ doc }">
        <div class="store__page">
          <div class="store__image">
            <img width="100%" height="100%" :src="doc.image" />
          </div>
          <div class="store__content__wrapper">
            <h1 class="store__heading">{{ doc.title }}</h1>
            <ContentRenderer class="store__content" :value="doc" />
          </div>
        </div>
        <div class="configurator">
          <span class="button__group">
            <button></button>
          </span>
        </div>
      </ContentDoc>
    </div>
  </div>
</template>

<style lang="scss">
@import 'src/css/spacing.scss';
@import 'src/css/breakpoints.scss';

.store__page {
  padding-top: calc(var(--spacing-unit)*5);
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: calc(var(--spacing-unit) * 3);
  grid-template-columns: 100%;
  grid-template-rows: 200px;
  @include bpmd {
    grid-template-columns: 200px calc(100% - 200px);
    padding-top: calc(var(--spacing-unit)*15);
  }
}
.store__content {
  color: var(--gray-200);
  padding-right: calc(var(--spacing-unit) * 3);
  padding-left: calc(var(--spacing-unit) * 3);
}
.store__heading {
  text-transform: uppercase;
  text-align: center;
  font-family: Oswald;
  color: var(--gray-200);
  @include bpmd {
    text-align: left;
  }
}
.store__content > p {
  font-family: Basic;
  margin-bottom: calc(var(--spacing-unit) * 3);
} 
.store__content > h2,h3 {
  font-family: Oswald !important;
  text-transform: uppercase;
}
.store__content > ol {
  font-family: Basic;
  list-style-type: decimal;
  list-style-position: inside;
}
.store__content > ul {
  font-family: Basic;
  list-style-type: disc;
  list-style-position: outside;
}
.store__content > p > a {
  color: var(--red-600);
  text-decoration: underline;
}
.store__content > p > a:visited {
  color: var(--red-800);
}
.store__image {
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
}
.store__image > img {
  border-radius: var(--spacing-unit);
}
</style>