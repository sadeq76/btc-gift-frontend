<script setup lang="ts">
import { usePostAddress } from "@/api/address";
import { openSnackbar } from "@/composable/states/snackbar";
import Address from "@/models/address";

const emit = defineEmits<{
  (e: "updateList", value: Address): void;
}>();

let markerPosition = reactive(null);
let center = reactive([51.352987, 35.65875]);
const zoom = ref<number>(14);
const projection = "EPSG:4326";
const model = reactive({
  title: null,
  address: null,
  zip_code: null,
  latitude: null,
  longitude: null,
});

const view = ref(null);

const getPosition = function (e) {
  if (e.coordinate) {
    markerPosition = e.coordinate;
    center = markerPosition;
    model.latitude = markerPosition[1];
    model.longitude = markerPosition[0];
    zoom.value = view.value.getZoom();
    // $fetch(
    //   `https://api.koalascoffee.com/user/reverse-geocoding/${markerPosition[1]}/${markerPosition[0]}/`
    // ).then((response) => {
    //   model.address = response.address;
    // });
  }
};

const submit = function () {
  usePostAddress(model).then((response) => {
    openSnackbar(response.detail, "success");
    emit("updateList", model);
  });
};
</script>

<template>
  <form @submit.prevent="submit">
    <h3 class="mb-4">افزودن آدرس</h3>
    <input
      v-model="model.title"
      dir="rtl"
      type="text"
      name="fullname"
      id="fullname"
      placeholder="عنوان"
      aria-label="عنوان"
      class="btc-text-field w-full mb-4"
      required
      oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
      oninput="this.setCustomValidity('')"
    />
    <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      class="w-full h-48 rounded mb-4"
      @click="getPosition"
    >
      <ol-view
        ref="view"
        :center="center"
        :zoom="zoom"
        :projection="projection"
      />
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>

      <!-- marker -->
      <ol-vector-layer>
        <ol-source-vector>
          <ol-feature>
            <ol-geom-point
              v-if="markerPosition"
              :coordinates="[...markerPosition]"
            ></ol-geom-point>
            <ol-style>
              <ol-style-circle radius="8">
                <ol-style-fill color="red"></ol-style-fill>
                <ol-style-stroke color="red" :width="1"></ol-style-stroke>
              </ol-style-circle>
            </ol-style>
          </ol-feature>
        </ol-source-vector>
      </ol-vector-layer>

      <!-- controllers -->
      <ol-fullscreen-control />
      <ol-zoom-control />
    </ol-map>

    <textarea
      v-model="model.address"
      dir="rtl"
      name="address"
      id="address"
      rows="5"
      placeholder="جزيیات آدرس ..."
      aria-label="پیام"
      class="btc-textarea w-full mb-4"
      required
      oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
      oninput="this.setCustomValidity('')"
    ></textarea>
    <input
      v-model="model.zip_code"
      dir="rtl"
      inputmode="numeric"
      type="tel"
      name="zipcode"
      id="zipcode"
      maxlength="10"
      placeholder="کد پستی"
      aria-label="کد پستی"
      class="btc-text-field w-full mb-4"
      required
      oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
      oninput="this.setCustomValidity('')"
    />
    <button type="submit" class="w-full btc-primary-button">ورود</button>
  </form>
</template>
