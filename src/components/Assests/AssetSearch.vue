<template>
  <div id="asset-search" class="bien-imm-search-container">
    <div id="asset-search-text" class="search-item">
      Estimer un bien
    </div>
    <AutoComplete id="asset-search-autocomplete" class="search-item search-item-input" v-model="value"
      :options="options" />
    <Button id="asset-search-button" label="Rechercher" icon="pi pi-search" iconPos="right"
      @click="() => search()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ['options'],
  name: "AssetSearchComponent",
  setup() {
    return {
      value: null,
      filteredCountriesBasic: []
    };
  },
  methods: {
    /*
    *  @description emit search action with the selected value
    */
    search() {
      this.$emit('search', this.value)
    }
  }
});
</script>

<style>
.bien-imm-search-container {
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: center;
  margin: 10px 0 20px 0;
}

.bien-imm-search-container .search-item {
  margin-right: 20px;
}

.search-item-input {
  width: 400px;
}
</style>