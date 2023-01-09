<script setup lang="ts">
import { useRoute } from 'vue-router/auto'
import { computed } from 'vue'
const route = useRoute('dynamic-path')

const getRouteParams = computed(() => route.params.path)
</script>

<template>
  <div>{{ getRouteParams }}</div>
</template>

<style scoped></style>

<route lang="json">
{
  "name": "dynamic-path"
}
</route>
