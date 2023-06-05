<script setup>
import axios from "axios";

const { $fetchData, $postData } = useNuxtApp()
const config = useRuntimeConfig();

console.log($fetchData('state'))


</script>

<template>
  <div>Hello Vue</div>
</template>
