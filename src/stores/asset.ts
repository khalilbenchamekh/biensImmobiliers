import { ListItem } from './../models/list-item';
import { AssetGroup } from './../models/asset-group';
import { defineStore } from 'pinia'
import axios from "axios"
import type { Asset } from '@/models/asset'

export const useAssetStore = defineStore('asset', {
  state: () => ({
    assets: [] as AssetGroup[],
    combiendAssets: [] as Asset[],
    filteredAssets: [] as Asset[],
    assetOptions: [] as ListItem[],
    details: null,
  }),
  getters: {
    getAssets(state) {
      return state.assets
    },
    getSearchAssets(state) {
      return state.filteredAssets
    },
    getAssetOptions(state) {
      return state.assetOptions
    },
    getDetails(state) {
      return state.details
    }
  },
  actions: {
    /*
    *  @description fetsh asset
    */
    async fetchAssets() {
      const data = await axios.get(import.meta.env.VITE_BASE_URL + 'biens')
      this.assets = data.data
      let counter = 1;
      let filteredAssetGroups = this.assets.map(assetGroup => assetGroup.biens.map(asset => ({ ...asset, id: counter++ })));
      this.combiendAssets = [].concat.apply([], filteredAssetGroups);
      this.assetOptions = this.combiendAssets.map(asset => ({ label: asset.address_line1, value: asset.id.toString() }));

    },
    
    /*
    *  @description filter assets depending on value
    */
    filterAssets(value: string) {
      let filteredAssetGroups = this.assets.map(assetGroup => assetGroup.biens.filter(asset => asset.address_line1 === value));
      this.filteredAssets = filteredAssetGroups.flat(1)
    },

    /*
    *  @description select the passed details
    */
    setDetails(value: Asset) {
      this.details = value;
    }
  },
})