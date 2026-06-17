<template>
  <div class="kindle-container">
    <NuxtPage />
  </div>
</template>

<style>
/* Optimized for Kindle E-Ink displays */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #000;
  background-color: #fff;
  padding: 15px;
  margin: 0;
  font-size: 22px; /* Large font for readability */
}

.kindle-container {
  max-width: 100%;
}

h1 {
  font-size: 32px;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
  margin-top: 0;
}

ul {
  padding-left: 25px;
  margin: 0;
}

li {
  margin-bottom: 20px;
}

a {
  color: #000;
  text-decoration: underline;
}

a:hover {
  text-decoration: none;
}
</style>
