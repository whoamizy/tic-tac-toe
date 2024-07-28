<script setup lang="ts">
interface Props {
  value: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  value: '',
  disabled: false
})
</script>

<template>
  <button
    class="flex h-16 w-16 items-center justify-center border transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:border-white disabled:bg-gray-200"
    :disabled="disabled"
    @click="$emit('fillCell')"
  >
    {{ value }}
  </button>
</template>
