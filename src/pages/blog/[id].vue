<script setup lang="ts">
const comment = ref<string>("");

const submitComment = (): void => {};
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <article class="max-w-1366 py-4 w-full flex max-md:flex-wrap px-4">
      <div
        class="
          btc-card
          md:sticky
          top-18
          w-1/3
          max-md:w-full
          h-fit
          md:ml-4
          max-md:mb-4
        "
      >
        <h2>لیست مطالب</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      <div class="btc-card w-2/3 max-md:w-full h-fit">
        <h1>این هدر اصلیه</h1>
        <p class="my-4">
          این توضیحات بلند بلاگ یا هون خلاصه بلاگه که این جا هر چند خطیه که
          بخوای ولی بهتره کوتاه باشه همین اندازه که من نوشتم
        </p>
        <img
          class="w-full aspect-video mb-4"
          src="https://media-cdn.tripadvisor.com/media/photo-s/0b/65/b6/50/hotel-imaage.jpg"
          alt=""
        />
        <p class="leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
          scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
          nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
          aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in
          odio. Praesent convallis urna a lacus interdum ut hendrerit risus
          congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
          In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec
          vitae dui eget tellus gravida venenatis. Integer fringilla congue eros
          non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
          purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
          lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
          Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
          luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
          ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum
          ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
          odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
          est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit.
        </p>
      </div>
    </article>
    <section class="max-w-1366 w-full mb-4 px-4 max-md:hidden">
      <h2>بلاگ های مرتبط</h2>
      <div class="flex mt-4">
        <div v-for="n in 4" :key="n" class="w-1/4 px-2">
          <img
            class="aspect-video w-full"
            src="https://media-cdn.tripadvisor.com/media/photo-s/0b/65/b6/50/hotel-imaage.jpg"
            alt=""
          />
          <h3 class="mt-2">این تیتر است</h3>
          <p class="mt-2">22 آبان ماه 76</p>
          <p class="mt-2 line-clamp-2">
            این توضیحات دوخطی بلاگ است و نمی تواند ماننید بلاگ پیشنهادی هر چند
            خطی ک میخواهید باشد پس لطفا دقت کنید اگر بلاگی توضیحات مهم دارد می
            بایست یشنهادی باشد
          </p>
          <div class="mt-4 flex justify-between items-center">
            <div class="flex items-center opacity-70">
              <span class="icon-account text-2xl"></span>
              <span class="mx-2">12</span>
              <span class="icon-account text-2xl"></span>
              <span class="mx-2">12</span>
            </div>
            <nuxt-link to="" class="text-primary flex items-center justify-end">
              مشاهده بلاگ
              <span class="icon-angle-left mr-2 text-primary"></span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section class="p-4 w-full md:hidden">
      <BlogsSlider :blogs="[]" />
    </section>

    <section class="max-w-1366 w-full mb-4 px-4">
      <h2>نظرات کاربران</h2>
      <p class="mt-2">نظر خود را ثبت کنید لطفا قوانین و مقررات را بخوانید</p>
      <form class="mt-4" @submit.prevent="submitComment">
        <textarea
          v-model="comment"
          dir="rtl"
          name="message"
          id="message"
          rows="5"
          placeholder="نظر خود را وارد کنید ..."
          aria-label="نظر"
          class="btc-textarea w-full"
          required
          oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
          oninput="this.setCustomValidity('')"
        ></textarea>
        <div class="flex justify-end mt-4">
          <button type="submit" class="w-1/8 btc-primary-button">
            ثبت نظر
          </button>
        </div>
      </form>
      <hr class="mt-8" />
      <div class="mt-4 rounded p-4">
        <div class="btc-avatar">
          <span class="icon-account text-background text-4xl"></span>
        </div>
        <p class="mt-2">سید صادق شاهمرادی</p>
        <p class="mt-4">
          این کامنت سید صادق شاهمرادی بزرگ است با تشکر از شما و توجهتان
        </p>
      </div>
    </section>
    <BaseFooter></BaseFooter>
  </div>
</template>

<style lang="scss" module="TheBlog">
</style>
