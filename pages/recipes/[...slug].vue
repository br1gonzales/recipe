<template>
  <main>
    <ContentDoc v-slot="{ doc }">
       <p style="margin-top: 40px;">
        <NuxtLink to="/">&larr; Volver al índice</NuxtLink>
      </p>
      <h1>{{ doc.title }}</h1>
      <ul>
        <li v-for="(step, index) in doc.steps" :key="index">
          {{ step }}
        </li>
      </ul>
    </ContentDoc>
  </main>
</template>
