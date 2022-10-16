<template>
  <div id="asset-details" class="bien-imm-details-container">
    <div class="bien-imm-details-box m-10-20">
      <div id="asset-details-address" class="bien-imm-details-item">
        Addresse : {{value?.address_line1}}
      </div>
      <div id="asset-details-city" class="bien-imm-details-item">
        Ville : {{value?.ville}}
      </div>
      <div id="asset-details-type" class="bien-imm-details-item">
        Type : {{value?.type}}
      </div>
      <div id="asset-details-description" class="bien-imm-details-item">
        Details : {{value?.description}}
      </div>
      <div id="asset-details-price" class="bien-imm-details-item f-grow flex-bottom-end">
        Prix : {{value?.prix}} {{value?.unit}}
      </div>
    </div>
    <div class="bien-imm-details-box border-round flex-center m-10-20">
      <img id="asset-details-image" :src="value?.photo" alt="Photo">
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props:['value'],
  name: "AssetDetailsComponent",
  setup() {
   
  },
});
</script>

<style>
.bien-imm-details-container {
  display: flex;
  flex-direction: row;
}
.bien-imm-details-box {
  width: 50%;
  height: 200px;
  border: solid thin #00000033;
  display: flex;
  flex-direction: column;
  padding: 5px;
}
.bien-imm-details-item {
  height: 40px;
}
.bien-imm-details-image{
  border-radius: 20px;
}
</style>