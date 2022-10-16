<script setup>
import { ref, onMounted, computed } from 'vue';
import { defineComponent } from "vue";

import AssetSearchComponent from "./AssetSearch.vue";
import AssetDetailsComponent from "./AssetDetails.vue";
import {Constants} from "../../components/common/Constants/Constants.ts";

import { useAssetStore } from "../../stores/asset";

const store = useAssetStore();

/*
*  @description list of filtered Assets
*/
const filteredAssets = computed(() => {
  return store.getSearchAssets
})

/*
*  @description list of options from store to be displayed in autocomplete
*/
const assetOptions = computed(() => {
  return store.getAssetOptions
})

/*
*  @description details of selected asset
*/
const details = computed(() => {
  return store.getDetails
})


onMounted(() => {
  //fetch assets from source
  store.fetchAssets();
})
</script>
<script>
export default {
  name: "Asset",
  setup(props) {
    const store = useAssetStore();
    return {
      tableRows: Constants.tablePageRows
    }
  },
  methods: {
    /*
    *  @description refresh results search button clicked
    */
    refreshResults(value) {
      console.log();
      this.store.filterAssets(value)
      this.store.setDetails(undefined)
    },
    /*
    *  @description select and show details of an asset in table
    */
    showDetails(value) {
      this.store.setDetails(value)
    }
  }
}

</script>
<template>
  <div id="asset-container" class="bien-imm-container">
    <!-- 1. Asset Search -->
    <AssetSearchComponent @search="refreshResults" :options="assetOptions" />

    <!-- 2. Asset Results -->
    <DataTable v-if="filteredAssets?.length" class="mb-20c p-datatable-sm" :value="filteredAssets"  :paginator="true" :rows="Constants.tablePageRows"
      :paginatorTemplate="Constants.tablePaginatorTemplate"
      :rowsPerPageOptions="Constants.tableRowsPerPageOptions" responsiveLayout="scroll"
      :currentPageReportTemplate="Constants.tableCurrentPageReportTemplate">
      <Column field="address_line1" header="Addresse Ligne 1"></Column>
      <Column field="ville" header="Ville"></Column>
      <Column field="type" header="Type"></Column>
      <Column field="prix" header="Prix"></Column>
      <Column header="Details">
        <template #body="slotProps">
          <i class="pi pi-search c-pointer" @click="showDetails(slotProps.data)"></i>
        </template>
      </Column>
    </DataTable>

    <!-- 3. Asset Details -->
    <AssetDetailsComponent v-if="details" :value="details" />
  </div>
</template>



<style>
.bien-imm-container {
  display: flex;
  flex-direction: column;
}
</style>