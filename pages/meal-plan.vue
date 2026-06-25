<script setup>
const { data: mealPlan } = await useAsyncData('meal-plan', () => queryContent('/meal-plan').findOne())
</script>

<template>
  <main>
    <p style="margin-top: 40px;">
      <NuxtLink to="/">&larr; Volver al índice</NuxtLink>
    </p>
    <h1>Meal Plan</h1>
    
    <table class="meal-table" v-if="mealPlan">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Desayuno</th>
          <th>Cena</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(day, index) in mealPlan.days" :key="index">
          <td>{{ day.date }}</td>
          <td>
            <span v-for="(item, i) in day.breakfast" :key="'b-'+i">
              <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
              <span v-if="i < day.breakfast.length - 1"> + </span>
            </span>
          </td>
          <td>
            <span v-for="(item, i) in day.dinner" :key="'d-'+i">
              <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
              <span v-if="i < day.dinner.length - 1"> o </span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Loading meal plan...</p>
  </main>
</template>
<style scoped>
.meal-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.meal-table th, .meal-table td {
  border: 1px solid #000;
  padding: 10px;
  text-align: left;
}

.meal-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}
</style>
