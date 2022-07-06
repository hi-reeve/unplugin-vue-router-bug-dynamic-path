<script setup lang="ts">
import { useRouter } from "@vue-router";
import { ref } from "vue";
const router = useRouter();
const isAuth = ref<boolean>(false);
router.beforeEach((to, from, next) => {
    if (isAuth.value) {
        console.log("test");
        return next();
    }

    return next();
});
</script>

<template>
    <router-view />
</template>

<style scoped></style>
