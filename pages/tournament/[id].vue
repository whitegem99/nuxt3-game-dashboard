<template>
  <div>
    <Head>
      <Title>{{ info.title }}</Title>
      <Meta name="description" :content="info.title" />
    </Head>
    <div class="">
      <!-- Mobile -->
      <div class="flex sm:hidden justify-between py-3">
        <div class="flex items-center gap-1">
          <button @click="$router.push('/')" class="flex justify-center">
            <GIcon name="i-heroicons-chevron-left" class="w-8 h-8" />
          </button>
          {{ chanel_name }}
        </div>
        <div class="flex gap-2">
          <div class="flex items-center">
            <GIcon name="i-heroicons-user" class="w-6 h-6" />
            <span class="">{{ formatNumber(item.views) || 0 }}</span>
          </div>
          <button @click="isOpen = true" class="flex items-center">
            <GIcon name="i-heroicons-share-20-solid" class="w-6 h-6" />
            <span class="pl-1">Share</span>
          </button>
        </div>
      </div>
      <!-- desktop -->
      <div class="sm:flex gap-10 items-start justify-between">
        <div class="hidden sm:block">
          <div
            class="w-52 px-4 py-8 rounded-md mb-4"
            style="box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.5)"
          >
            <div class="flex flex-col items-center relative">
              <div
                style="background-image: url(/img/ch1.jpg)"
                class="w-24 h-24 rounded-full bg-center bg-cover mb-4"
              ></div>
              <h2 class="text-lg mb-4">{{ chanel_name }}</h2>
              <p class="text-sm">Category: Hearthstone</p>
              <button
                @click="$router.push('/')"
                :padded="false"
                class="flex justify-center absolute -left-2 top-12 -translate-y-1/2"
              >
                <GIcon name="i-heroicons-chevron-left" class="w-10 h-10" />
              </button>
            </div>
          </div>
          <ButtonGradient class="w-full text-lg">
            Begin Tournament
          </ButtonGradient>
        </div>
        <div class="flex-1">
          <div>
            <img :src="item.image" alt="" class="w-full" />
          </div>
          <div class="pt-2 mb-5 sm:mb-8 text-center sm:text-left">
            <div class="sm:flex justify-between mb-2">
              <h1 class="text-2xl font-bold">{{ info.title }}</h1>
              <span class="hidden sm:block">
                {{ formatNumber(item.views) || 0 }} views
              </span>
            </div>
            <div class="text-dark-bd">
              {{ item.description }}
            </div>
            <ButtonGradient class="w-full text-lg mt-5 sm:hidden">
              Begin Tournament
            </ButtonGradient>
          </div>
          <div>
            <GCollapse :items="info.rounds" key-title="name">
              <template #header-title="{ item }">
                <div
                  class="flex-1 flex justify-between items-center py-3 pl-7 sm:pl-12 pr-0 gap-2"
                >
                  <span class="truncate text-lg">{{ item.name }}</span>
                  <div class="font-normal text-sm whitespace-nowrap">
                    <span class="pr-2 sm:pr-4">
                      {{ item.matches.length || 0 }} matches
                    </span>
                    <span>{{ item.time }} hrs</span>
                  </div>
                </div>
              </template>
              <template #content="{ item }">
                <div
                  v-for="it in item.matches"
                  :key="it.id"
                  class="mb-2.5 sm:mb-4 first:-mt-1.5"
                >
                  <MatchItem
                    :name="`Match ${it.id}`"
                    :time="it.time"
                    :url="it.url"
                    :ready_to_play="it.status !== 'draft'"
                    @click="
                      it.status !== 'draft' && $router.push(`/match/${it.id}`)
                    "
                  />
                </div>
              </template>
            </GCollapse>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-10 right-10 hidden sm:flex">
      <ButtonGradient
        class="w-14 h-14 text-lg !rounded-full"
        @click="isOpen = true"
      >
        <GIcon name="i-heroicons-share-20-solid" class="w-6 h-6" />
      </ButtonGradient>
    </div>
    <GModal v-model="isOpen" title="Share">
      <div class="flex justify-center gap-4">
        <GButton class="w-14 h-14 text-lg !rounded-full !text-white bg-gray-50">
          <GIcon name="i-mdi-twitter" class="w-10 h-10" />
        </GButton>
        <GButton class="w-14 h-14 text-lg !rounded-full !text-white bg-gray-50">
          <GIcon name="i-mdi-facebook" class="w-10 h-10" />
        </GButton>
        <GButton class="w-14 h-14 text-lg !rounded-full !text-white bg-gray-50">
          <GIcon name="i-mdi-whatsapp" class="w-10 h-10" />
        </GButton>
        <GButton class="w-14 h-14 text-lg !rounded-full !text-white bg-gray-50">
          <GIcon name="i-mdi-link-variant" class="w-10 h-10" />
        </GButton>
      </div>
    </GModal>
  </div>
</template>

<script setup>
import { useTournaments } from "@/stores/useTournaments";
const route = useRoute();
const store = useTournaments();
await store.getTournamentById(route.params.id);
const { item_temp: item, item: info } = storeToRefs(store);
const chanel_name = "Channel Name";
const isOpen = ref(false);
</script>
