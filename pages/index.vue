<template>
  <main>
    <h1>Recetario</h1>
    
    <ContentList path="/recipes" v-slot="{ list }">
      <ul>
        <li v-for="recipe in list" :key="recipe._path">
          <NuxtLink :to="recipe._path">{{ recipe.title }}</NuxtLink>
        </li>
      </ul>
      <p v-if="list.length === 0">No se encontraron recetas.</p>
    </ContentList>
  </main>
</template>
