<template>
  <div class="flex justify-center">
    <div class="p-10 w-full max-w-xl">
      <h1 class="text-3xl">
        {{ title }}
      </h1>
      <UBreadcrumb
        v-if="breadcrumbs?.length"
        class="mt-1"
        :links="breadcrumbs"
      />
      <main class="mt-10">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BreadcrumbLink } from '#ui/types'

defineProps<{
  title: string
  breadcrumbs?: BreadcrumbLink[]
}>()
</script>
