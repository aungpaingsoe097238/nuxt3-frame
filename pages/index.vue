<script setup>
const { $fetchData, $postData, $updateData, $deleteData } = useNuxtApp()

const handleCreate = () => {
  let data = $deleteData('state',1,{
    name : 'state update'
  })
  console.log(data)
} 

onMounted(() => {
  let data = $fetchData('state')
  console.log(data);
})

</script>

<template>
  <div>
    <button @click="handleCreate">post</button>
  </div>
</template>
