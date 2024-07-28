<script setup lang="ts">
interface Props {
  value: string
}

withDefaults(defineProps<Props>(), {
  value: ''
})
</script>

<template>
  <button
    class="flex h-16 w-16 items-center justify-center border transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-200"
    :disabled="!!value"
    @click="$emit('click')"
  >
    {{ value }}
  </button>
</template>
