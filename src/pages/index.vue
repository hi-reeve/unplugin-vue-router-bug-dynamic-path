<script setup lang="ts">

</script>

<template>
  <div>
    <p>Home pages</p>
    <div>
      <router-link
        :to="{
          name: 'dynamic-path',
          params: {
            path: 'test',
          },
        }"
      >
        To custom path
      </router-link>
    </div>
    <div>
      <router-link
        :to="{
          name: 'dynamic-path',
          params: {
            path: encodeURIComponent('test@test.com'),
          },
        }"
      >
        To path with encoded value
      </router-link>
    </div>
    <div>
      <router-link
        :to="{
          name: 'other',
        }"
      >
        To other page
      </router-link>
    </div>
    <div>
      <router-link
        :to="{
          name: 'user-page',
        }"
      >
        to user page
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>

<route lang="yaml">
name: home
meta:
  permission:
    subject: read
    action: Do Something with permission
</route>
