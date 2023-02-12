<script setup lang="ts">
const projection = ref("EPSG:4326");
const zoom = ref(16);
const rotation = ref(0);

interface Props {
  id: number;
  title: string;
  address: string;
  latitude: string;
  longitude: string;
  zip_code: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <div class="btc-card flex flex-wrap p-4">
      <div class="w-full md:w-1/2 pl-4">
        <p class="mb-2">
          <span class="font-bold ml-2">عنوان:</span>
          <span>{{ props.title || "بدون عنوان" }}</span>
        </p>

        <p class="mb-2">
          <span class="font-bold ml-2">کد پسیتی:</span>
          <span>{{ props.zip_code }}</span>
        </p>

        <p class="max-md:mb-4 line-clamp-2">
          <span class="font-bold ml-2">آدرس:</span>
          <span>{{ props.address }}</span>
        </p>
      </div>
      <div class="w-full md:w-1/2">
        <ol-map
          :loadTilesWhileAnimating="true"
          :loadTilesWhileInteracting="true"
          class="h-32 rounded"
        >
          <ol-view
            ref="view"
            :center="[props.longitude, props.latitude]"
            :rotation="rotation"
            :zoom="zoom"
            :projection="projection"
          />

          <ol-tile-layer>
            <ol-source-osm />
          </ol-tile-layer>
          <ol-vector-layer>
            <ol-source-vector>
              <ol-feature>
                <ol-geom-point
                  :coordinates="[props.longitude, props.latitude]"
                ></ol-geom-point>
                <ol-style>
                  <ol-style-circle radius="5">
                    <ol-style-fill color="orange"></ol-style-fill>
                  </ol-style-circle>
                </ol-style>
              </ol-feature>
            </ol-source-vector>
          </ol-vector-layer>
        </ol-map>
      </div>
    </div>
  </div>
</template>
