<script>
export let color = 'var(--red-600)'
</script>

<div class="alert" style="font-family: 'Basic'" style:background-color={ color }>
  <slot></slot>
</div>

<style lang="scss">
.alert {
  border-radius: var(--spacing-unit);
  padding: var(--spacing-unit);
  margin-bottom: calc(var(--spacing-unit) * 3);
}
</style>
