<template>
  <div class="observer" />
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: false,
      default() {
        return {}
      },
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    observer: null,
  }),
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (this.active && entry && entry.isIntersecting) {
        this.$emit('intersect')
      }
    }, this.options)

    this.observer.observe(this.$el)
  },
  destroyed() {
    if (this.observer) this.observer.disconnect()
  },
}
</script>
