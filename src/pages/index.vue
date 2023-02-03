<script lang="ts" setup>
//content
import landing from "@/content/landing.json";
//fetch
import { useGetBlogs } from "@/api/blog/blogs";
// types
import { NavigationFailure } from "vue-router";
import Blogs from "@/models/blogs";

const router = useRouter();
const goToOrderPage = (): Promise<void | NavigationFailure> =>
  router.push("order/create/unknown");

const blogs = ref<Blogs[]>();

onMounted(() => {
  useGetBlogs("4", "0").then((response) => (blogs.value = response.result));
});
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center">
    <!-- hero section -->
    <header
      :class="[
        TheLanding['hero-section'],
        'md:hidden bg-background w-full flex flex-col',
      ]"
    >
      <div class="grow relative w-full">
        <div class="absolute z-10 bg-background left-8 top-0 right-0 p-4">
          <h1 class="mb-4">
            به یک هدیه عالی نیاز داری؟
            <br />
            به
            <span class="text-primary px-2">بی تی سی گیفت</span>
            خوش آمدی
          </h1>
          <p>{{ landing.heroSectionDescription }}</p>
          <div class="flex flex-col items-center mt-4">
            <button @click="goToOrderPage" class="mb-4 btc-primary-button">
              ثبت سفارش
            </button>
            <br />
            <NuxtLink class="flex items-center" to="/blog/1">
              <span class="ml-3 icon-play-circle"></span>
              <span>آموزش نحوه استفاده</span>
            </NuxtLink>
          </div>
        </div>
        <div
          class="px-4 pt-4 absolute bottom-0 w-16 overflow-hidden flex flex-col"
        >
          <a
            v-for="(account, index) in landing.socialAccounts"
            :key="index"
            :href="'http://' + account.path"
          >
            <span
              :class="`icon-${account.name} text-primary text-3xl my-4`"
            ></span>
          </a>
        </div>
        <div class="bg-text absolute bottom-0 top-16 left-0 right-16">
          <img class="w-full h-full" src="~/assets/images/image1.jpg" />
        </div>
      </div>
      <div class="p-4 relative bg-test h-fit w-full">
        <dl class="flex justify-between items-center">
          <data
            v-for="(counter, index) in landing.counters"
            :key="index"
            value="counter.value"
            class="w-1/3 overflow-hidden text-ellipsis"
          >
            <dt class="mb-2 font-semibold text-center text-2xl text-primary">
              {{ counter.value }}%
            </dt>
            <dd
              class="
                w-full
                overflow-hidden
                whitespace-nowrap
                font-thin
                text-center text-ellipsis
              "
            >
              {{ counter.title }}
            </dd>
          </data>
        </dl>
      </div>
    </header>
    <header
      :class="[
        TheLanding['hero-section'],
        'px-8 w-full flex flex-col max-md:hidden max-w-1366',
      ]"
    >
      <div class="grow overflow-hidden flex items-center mt-4">
        <div
          class="
            w-full
            lg:w-1/2
            max-lg:text-center
            h-full
            max-h-80
            flex flex-col
            justify-between
          "
        >
          <div>
            <h1 class="mb-5">
              به یک هدیه عالی نیاز داری؟
              <br />
              به
              <span class="bg-primary-gradient text-test px-4"
                >بی تی سی گیفت</span
              >
              خوش آمدی
            </h1>
            <p>{{ landing.heroSectionDescription }}</p>
          </div>
          <div class="flex items-center max-lg:justify-center">
            <button @click="goToOrderPage" class="ml-5 py-2 btc-primary-button">
              ثبت سفارش
            </button>
            <NuxtLink class="flex items-center" to="/blog/1">
              <span class="ml-3 icon-play-circle"></span>
              <span>آموزش استفاده از بی تی سی گیفت</span>
            </NuxtLink>
          </div>
        </div>
        <div class="w-1/2 h-full max-lg:hidden">
          <DesktopCardsSlider />
        </div>
      </div>
      <div
        :class="[
          TheLanding['counter-card'],
          'relative shadow h-fit w-full p-8 my-4',
        ]"
      >
        <dl class="flex justify-between items-center">
          <data
            v-for="(counter, index) in landing.counters"
            :key="index"
            value="counter.value"
          >
            <dt class="mb-2 font-semibold">
              <span class="ml-2 text-primary text-2xl font-bold">
                {{ counter.value }}
              </span>
              {{ counter.postfix }}
            </dt>
            <dd class="text-lg font-thin">{{ counter.title }}</dd>
          </data>
        </dl>
      </div>
    </header>
    <!-- Cards Slider Section -->
    <section class="m-4 px-8 flex flex-col items-center lg:hidden">
      <h2 class="text-center">
        گیفت کارت های
        <span class="text-primary">بی تی سی</span>
        با مبالغ متنوع
      </h2>
      <p class="mt-4 text-center">
        {{ landing.cardsSectionDescription }}
      </p>
      <MobileCardsSlider class="mt-4" />
    </section>
    <!-- Why Us Section -->
    <div class="max-w-1366 md:px-8">
      <section class="w-full h-fit bg-test p-4 md:flex">
        <div class="flex flex-col justify-between">
          <div class="flex flex-col justify-between">
            <h2>
              و اما چرا
              <br />
              <span class="text-primary"> بی تی سی </span>
              گیفت ؟
            </h2>
            <p class="mt-4">
              {{ landing.whyUsDescription }}
            </p>
          </div>
          <span class="icon-angle-left max-md:hidden flex justify-end"></span>
        </div>
        <div
          v-for="(item, index) in landing.whyus"
          :key="index"
          :class="`md:w-1/${
            landing.whyus.length + 1
          } max-md:mt-4 p-2 bg-background rounded-lg flex flex-col max-md:items-center md:mr-4`"
        >
          <div
            class="
              bg-primary-gradient
              w-24
              h-24
              p-4
              rounded-full
              flex
              justify-center
              items-center
              shadow-md shadow-primary
            "
          >
            <span :class="`icon-${item.icon} text-background text-4xl`"></span>
          </div>
          <h3 class="text-primary mt-4">{{ item.title }}</h3>
          <p class="mt-4 max-md:text-center">{{ item.description }}</p>
        </div>
      </section>
    </div>
    <!-- Features Image Slider -->
    <section class="p-4 w-full md:hidden">
      <BlogsSlider :blogs="blogs" />
    </section>
    <DesktopBlogs
      :blogs="blogs"
      class="md:px-8 m-12 w-full max-w-1366 max-md:hidden"
    />
    <!-- Contact us -->
    <ContactUs />
    <!-- Footer -->
    <BaseFooter></BaseFooter>
  </div>
</template>
<style lang="scss" module="TheLanding">
.hero-section {
  height: min(177vw, 768px);
  overflow: hidden;
}

.counter-card::before {
  content: "";
  width: 0.4em;
  background-color: rgb(var(--color-primary));
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}
.counter-card::after {
  content: "";
  width: 0.4em;
  background-color: rgb(var(--color-primary));
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
}
</style>