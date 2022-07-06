<script setup lang="ts"></script>

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
                    name: 'other',
                }"
            >
                To other page
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>

<route>
{
    "name": "home",
    "meta": {
        "permission": {
            "subject": "read",
            "action": "Do something permission"
        }
    }
}
</route>
