<template>
  <div>
    <div class="">
      <!-- Mobile -->
      <div class="flex sm:hidden justify-between py-3">
        <div class="flex items-center gap-1">
          <button
            @click="$router.push('/tournament/1')"
            class="flex justify-center"
          >
            <GIcon name="i-heroicons-chevron-left" class="w-8 h-8" />
          </button>
          {{ item.title }}
        </div>
      </div>
      <!-- desktop -->
      <div class="sm:flex gap-10 justify-between">
        <div class="hidden sm:block">
          <div
            class="w-60 px-4 py-4 rounded-md mb-4 h-full bg-dark-24"
            style="box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.5)"
          >
            <div class="flex items-start">
              <button
                @click="$router.push('/tournament/1')"
                class="flex justify-center -ml-2"
              >
                <GIcon name="i-heroicons-chevron-left" class="w-10 h-10" />
              </button>
              <div class="flex-1">
                <div
                  :style="`background-image: url(${item.image});`"
                  class="w-full bg-center bg-cover mb-4 aspect-square rounded"
                ></div>

                <h5 class="font-bold mb-5">
                  {{ item.title }}
                </h5>
                <div class="text-sm">
                  <div class="line-clamp-3 mb-5">
                    {{ item.description }}
                  </div>
                  <p class="text-sm mb-5">Category: Hearthstone</p>
                  <div class="flex items-center gap-2">
                    <div
                      style="background-image: url(/img/ch1.jpg)"
                      class="w-11 h-11 rounded-full bg-center bg-cover"
                    ></div>
                    <h2>{{ chanel_name }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <video
            playsinline=""
            class="mui-1se970o-video w-full"
            controls=""
            data-automation="VideoPlayer"
            height="100%"
            loop=""
            muted=""
            width="100%"
            poster="/img/match1.png"
            preload="metadata"
            aria-label="video-player"
          >
            <source
              src="https://www.shutterstock.com/shutterstock/videos/1010320310/preview/stock-footage-low-section-of-legs-of-female-soccer-athlete-practicing-dribbling-a-ball-in-dark-sports-arena-with.webm"
              type="video/webm"
            />
            <source
              src="https://www.shutterstock.com/shutterstock/videos/1010320310/preview/stock-footage-low-section-of-legs-of-female-soccer-athlete-practicing-dribbling-a-ball-in-dark-sports-arena-with.mp4"
              type="video/mp4"
            />
          </video>
          <div class="py-2 pl-5 mb-5 sm:mb-8 bg-dark-24">
            <div class="flex justify-between items-center">
              <h1
                class="flex-1 text-2xl font-bold gap-2 whitespace-nowrap truncate"
              >
                Title of Match- Round #{{ $route.params.id }}
              </h1>
              <div class="flex items-center gap-2">
                <span class="hidden sm:block whitespace-nowrap">
                  {{ formatNumber(27767) }} views
                </span>
                <GDropdown :items="actionItems">
                  <button class="pr-2">
                    <GIcon
                      name="i-heroicons-ellipsis-vertical-20-solid"
                      class="w-8 h-8"
                    />
                  </button>
                </GDropdown>
              </div>
            </div>
          </div>
          <div class="block sm:hidden text-right">
            <span class="sm:hidden"> {{ formatNumber(27767) }} views </span>
          </div>
          <h4 class="text-lg mb-7 font-bold">Up next:</h4>
          <div>
            <div
              v-for="it in item.rounds[0].matches"
              :key="it.id"
              class="mb-2.5 sm:mb-4 last:mb-0 first:-mt-1.5"
            >
              <MatchItem
                :name="it.name"
                :time="it.time"
                :url="it.url"
                :ready_to_play="it.ready_to_play"
                @click="it.ready_to_play && $router.push(`/match/${it.id}`)"
              />
            </div>

            <GCollapse :items="item.rounds">
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
                  class="mb-2.5 sm:mb-4 last:mb-0 first:-mt-1.5"
                >
                  <MatchItem
                    :name="it.name"
                    :time="it.time"
                    :url="it.url"
                    :ready_to_play="it.ready_to_play"
                    @click="it.ready_to_play && $router.push(`/match/${it.id}`)"
                  />
                </div>
              </template>
            </GCollapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTournaments } from "@/stores/useTournaments";
const store = useTournaments();
const { item } = storeToRefs(store);

const chanel_name = "Channel Name";
const actionItems = [
  [
    {
      label: "Quality",
    },
    {
      label: "Report",
    },
    {
      label: "Help & feedback",
    },
    {
      label: "Playback speed",
    },
  ],
];
</script>
