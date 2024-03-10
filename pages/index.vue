<script setup>
import { useTournaments } from "@/stores/useTournaments";
useSeoMeta({
  title: "Gamer viewer",
  ogTitle: "Gamer viewer",
  description: "Gamer viewer.",
  ogDescription: "Gamer viewer",
  ogImage:
    "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
  twitterCard: "summary_large_image",
});
const store = useTournaments();
await store.getTournaments();
const { items } = storeToRefs(store);
</script>
<template>
  <div>
    <h1 class="text-3xl mb-5 font-bold">Tournaments</h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
      <GCard v-for="(item, ii) in items" :key="ii">
        <template #header> #{{ item.id }} </template>
        <div>
          <p>{{ item.title }}</p>
          <div class="text-right pt-4">
            <NuxtLink
              class="italic text-primary hover:text-white"
              :to="`/tournament/${item.id}`"
            >
              Detail >>
            </NuxtLink>
          </div>
        </div>
      </GCard>
    </div>
  </div>
</template>
