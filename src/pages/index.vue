<template>
  <!-- hero section -->
  <header
    :class="[
      TheLanding['hero-section'],
      'sm:hidden bg-background w-full flex flex-col',
    ]"
  >
    <div class="grow relative w-full">
      <div class="absolute z-10 bg-background left-8 top-0 right-0 p-4">
        <h1 class="mb-4">
          به یک هدیه عالی نیاز داری؟
          <br />
          به
          <span class="bg-primary-gradient text-test px-2">بی تی سی گیفت</span>
          خوش آمدی
        </h1>
        <div class="flex flex-col items-center">
          <button class="mb-4 primary-button">ثبت سفارش</button>
          <br />
          <NuxtLink to="/how-to-use">
            <span class="ml-3">play</span>
            <span>آموزش نحوه استفاده</span>
          </NuxtLink>
        </div>
      </div>
      <div
        class="px-4 pt-4 absolute bottom-0 w-16 overflow-hidden flex flex-col"
      >
        <a
          v-for="(account, index) in socialAccounts"
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
          v-for="(counter, index) in counters"
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
      'px-8 w-full flex flex-col max-sm:hidden max-w-1366',
    ]"
  >
    <div class="grow flex justify-between items-center">
      <div class="basis-1/2">
        <h1 class="mb-5">
          به یک هدیه عالی نیاز داری؟
          <br />
          به
          <span class="bg-primary-gradient text-test px-4">بی تی سی گیفت</span>
          خوش آمدی
        </h1>
        <p class="mb-32">
          بی تی سی گیفت تنها فروشنده کارت های هدیه ارز دیجیتال در ایران با
          قابلیت ثبت سفارش آسان و سریع
        </p>
        <div class="flex items-center">
          <button class="ml-5 py-2 primary-button">ثبت سفارش</button>
          <NuxtLink to="/how-to-use">
            <span class="ml-3">play</span>
            <span>آموزش استفاده از بی تی سی گیفت</span>
          </NuxtLink>
        </div>
      </div>
      <img
        class="basis-1/2 lg:w-full aspect-video"
        src="~/assets/images/image1.jpg"
      />
    </div>
    <div
      :class="[
        TheLanding['counter-card'],
        'relative custom-shadow h-fit w-full py-16 px-32',
      ]"
    >
      <dl class="flex justify-between items-center">
        <data
          v-for="(counter, index) in counters"
          :key="index"
          value="counter.value"
        >
          <dt class="mb-2 text-2xl font-semibold">
            <span class="text-primary text-5xl font-bold">
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
  <section class="m-4 px-8 flex flex-col items-center max-w-1366">
    <h2>
      گیفت کارت های
      <span class="text-primary">بی تی سی</span>
      با مبالغ متنوع
    </h2>
    <p class="mt-4 text-center">
      بی تی سی گیفت یک کارت هدیه حاوی یک کلید عمومی بیت کوین است که به مخاطب شما
      اجازه میدهد به راحتی کیف پول دیجیتال خود را شارژ کند
    </p>
    <CardSlider class="mt-4" />
  </section>
  <!-- Why Us Section -->
  <div class="max-w-1366 sm:px-8">
    <section class="w-full h-fit bg-test p-4 sm:flex">
      <div class="flex flex-col justify-between">
        <div class="flex flex-col justify-between">
          <h2>
            و اما چرا
            <br />
            <span class="text-primary"> بی تی سی </span>
            گیفت ؟
          </h2>
          <p class="mt-4">
            ما در بی تی سی گیفت سعی داشته ایم که علاوه بر جلب رضایت مشتری به دو
            عامل کلیدی توجه داشته باشیم
          </p>
        </div>
        <span class="icon-angle-left max-md:hidden flex justify-end"></span>
      </div>
      <div
        v-for="(item, index) in whyus"
        :key="index"
        :class="`sm:w-1/${
          whyus.length + 1
        } max-sm:mt-4 p-2 bg-background rounded-lg flex flex-col max-sm:items-center sm:mr-4`"
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
          <span>shield</span>
        </div>
        <h3 class="text-primary mt-4">{{ item.title }}</h3>
        <p class="mt-4 max-sm:text-center">{{ item.description }}</p>
      </div>
    </section>
  </div>
  <!-- Features Image Slider -->
  <section class="p-4 w-full sm:hidden">
    <ImageSlider :features="features" />
  </section>
  <section class="w-full h-fit py-12 max-w-1366 px-8 max-sm:hidden">
    <div
      v-for="(item, index) in features"
      :key="index"
      class="my-12 flex justify-start items-center"
      :dir="index % 2 !== 0 ? 'ltr' : 'rtl'"
    >
      <div :class="[TheLanding['img-container'], 'relative w-1/2']">
        <img
          class="aspect-video w-full"
          :src="`btc-gift/assets/images/${item.image}.jpg`"
          :alt="item.title"
        />
      </div>
      <div class="mx-8 w-1/2 overflow-hidden">
        <h2>{{ item.title }}</h2>
        <p class="">{{ item.description }}</p>
      </div>
    </div>
  </section>
  <!-- Contact us -->
  <section class="w-full h-max bg-test shadow-lg shadow-background flex">
    <form
      class="p-4 sm:basis-1/2 sm:px-8 lg:px-14"
      @submit.prevent="sendMessage"
    >
      <h2>با ما در ارتباط باشید ...</h2>
      <input
        v-model="name"
        dir="rtl"
        type="text"
        name="fullname"
        id="fullname"
        placeholder="نام کامل"
        aria-label="نام کامل"
        class="text-field w-full mt-4"
        required
      />
      <input
        v-model="email"
        dir="rtl"
        type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        name="email"
        id="email"
        placeholder="ایمیل"
        aria-label="ایمیل"
        class="text-field w-full mt-4"
        required
      />
      <textarea
        v-model="message"
        dir="rtl"
        name="message"
        id="message"
        rows="5"
        placeholder="پیام خود را وارد کنید ..."
        aria-label="پیام"
        class="textarea w-full mt-4"
        required
      ></textarea>
      <div class="flex mt-8">
        <button
          class="ml-2 w-full secondary-button flex justify-center items-center"
        >
          <span class="icon-upload text-primary ml-2"></span>
          آپلود فایل
        </button>
        <button class="w-full primary-button">ارسال پیام</button>
      </div>
    </form>
    <div class="basis-1/2 bg-overlay max-sm:hidden">
      <!-- <img
        class="w-full h-full object-cover"
        src="~/assets/images/image3.jpg"
        alt="contact us"
      /> -->
    </div>
  </section>
  <!-- Footer -->
  <BaseFooter></BaseFooter>
</template>
<script lang="ts" setup>
import imageModel from "../models/image.model";
import counterModel from "../models/counter.model";
import whyusModel from "../models/whyus.model";
import featureModel from "../models/feature.model";

const socialAccounts = [
  {
    name: "telegram",
    path: "",
  },
  {
    name: "insta",
    path: "",
  },
  {
    name: "whatsapp",
    path: "",
  },
  {
    name: "facebook",
    path: "",
  },
];

const images = reactive<imageModel[]>([
  { name: "image1.jpg", title: "بزرگترین فروشگاه بین المللی کارت هدیه" },
  { name: "image2.jpg", title: "سلام خدمت دوستدارن سایت" },
  { name: "image3.jpg", title: "اینجانب هیچگونه فعالیتی در زمینه وب" },
]);
const counters = reactive<counterModel[]>([
  { title: "رضایت مشتری از خرید", value: "95", postfix: "درصد" },
  { title: "مشتریان ما", value: "89", postfix: "هزار" },
  { title: "تعداد خرید", value: "۹۹", postfix: "میلیون" },
]);
const whyus = reactive<whyusModel[]>([
  {
    icon: "shield",
    title: "خریدی امن و مطمیٔن",
    description:
      "ما در بی تی سی گیفت سعی داشته ایم که علاوه بر جلب رضایت مشتری به دو عامل کلیدی توجه داشته باشیم",
  },
  {
    icon: "rocket",
    title: "سرعت و سهولت سفارش",
    description:
      "ما در بی تی سی گیفت سعی داشته ایم که علاوه بر جلب رضایت مشتری به دو عامل کلیدی توجه داشته باشیم",
  },
]);
const features = reactive<featureModel[]>([
  {
    image: "image1",
    title: "امکان سفارش هولدر با متن سفارشی",
    description: "",
  },
  {
    image: "image2",
    title: "سرعت و سهولت سفارش",
    description:
      "ما در بی تی سی گیفت سعی داشته ایم که علاوه بر جلب رضایت مشتری به دو عامل کلیدی توجه داشته باشیم",
  },
]);

const name = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");

const sendMessage = () => {};
</script>
<style lang="scss" module="TheLanding">
.hero-section {
  height: 177vw;
  overflow: hidden;
  @media (min-width: theme("screens.sm")) {
    height: min(48vw, 768px);
  }
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

.img-container {
  border: 0.5rem solid rgb(var(--color-primary));
  border-radius: 0.5rem;
  box-shadow: 0px 0px 0.5rem 0.3rem rgb(var(--color-primary));
  width: 32rem;
}

.img-container::after {
  content: "";
  border: 0.3rem dashed rgb(var(--color-primary));
  border-radius: 0.5rem;
  position: absolute;
  left: -0.5em;
  right: -0.5em;
  top: -0.5em;
  bottom: -0.5em;
  transform: rotate(-5deg);
}
</style>