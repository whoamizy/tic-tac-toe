<script setup lang="ts">
interface Props {
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  disabled: false
})
</script>

<template>
  <button
    class="rounded-md border bg-green-400 px-4 py-2 font-semibold text-black transition hover:bg-green-600 hover:text-white"
    :disabled="disabled"
    @click="$emit('onClick')"
  >
    <slot />
  </button>
</template>
