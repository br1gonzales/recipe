<template>
  <main>
    <p style="margin-top: 40px;">
      <NuxtLink to="/">&larr; Volver al índice</NuxtLink>
    </p>
    <h1>Meal Plan</h1>
    
    <table class="meal-table">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Desayuno</th>
          <th>Cena</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jueves, 25 de Junio</td>
          <td>
            <NuxtLink to="/recipes/capuccino">Capuccino</NuxtLink> + <NuxtLink to="/recipes/omelette">Omelette</NuxtLink>
          </td>
          <td>
            <NuxtLink to="/recipes/lentejas">Lentejas</NuxtLink>
          </td>
        </tr>
        <tr>
          <td>Viernes, 26 de Junio</td>
          <td>
            <NuxtLink to="/recipes/capuccino">Capuccino</NuxtLink> + <NuxtLink to="/recipes/avena-mantequilla-mani-manzana">Avena con PB y Manzana</NuxtLink>
          </td>
          <td>
            <NuxtLink to="/recipes/arroz-con-pollo-con-huancaina">Arroz con Pollo a la Huancaína</NuxtLink>
          </td>
        </tr>
        <tr>
          <td>Sábado, 27 de Junio</td>
          <td>
            <NuxtLink to="/recipes/capuccino">Capuccino</NuxtLink> + <NuxtLink to="/recipes/pan-con-palta-huevo">Pan con Palta y Huevo</NuxtLink>
          </td>
          <td>
            <NuxtLink to="/recipes/lomo-saltado">Lomo Saltado</NuxtLink>
          </td>
        </tr>
        <tr>
          <td>Domingo, 28 de Junio</td>
          <td>
            <NuxtLink to="/recipes/capuccino">Capuccino</NuxtLink> + <NuxtLink to="/recipes/huevos-revueltos">Huevos Revueltos</NuxtLink>
          </td>
          <td>
            <NuxtLink to="/recipes/aji-de-gallina">Ají de Gallina</NuxtLink> o <NuxtLink to="/recipes/tallarines-verdes">Tallarines Verdes</NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
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
