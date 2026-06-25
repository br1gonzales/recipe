<script setup>
const route = useRoute()
const { data: recipe } = await useAsyncData('recipe-' + route.path, () => queryContent(route.path).findOne())
</script>

<template>
  <main>
    <div v-if="recipe">
      <p style="margin-top: 40px;">
        <NuxtLink to="/">&larr; Volver al índice</NuxtLink>
      </p>
      <h1>{{ recipe.title }}</h1>
      <p v-if="recipe.description">{{ recipe.description }}</p>
      <ul>
        <li v-for="(step, index) in recipe.steps" :key="index">
          {{ step }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p style="margin-top: 40px;">
        <NuxtLink to="/">&larr; Volver al índice</NuxtLink>
      </p>
      <h1>Recipe not found</h1>
    </div>
  </main>
</template>
