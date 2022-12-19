<template>
  <header>
    <h1>Pharma Inc</h1>
    <Table :data="users"/>
  </header>
</template>

<script setup>
import Table from '../components/Table.vue';
import useStore from '../stores'

const store = useStore();
const users = store.users;
</script>

<style>

</style>