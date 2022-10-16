<template>
  <div id="autocomplete" class="bg-gray-50 min-w-screen min-h-screen flex justify-center items-center">
    <div class="max-w-xs relative space-y-3">

      <input type="text" id="search" v-model="searchTerm" @click="allowOptionsDisplay()" placeholder="Type here..."
        class="p-3 mb-0.5 w-full border border-gray-300 rounded">
      <div id="autocomplete-options" v-if="showOptions" class="optins-list">
        <div v-for="option in searchOptions" :key="option.label" @click="selectOption(option)"
          class="cursor-pointer hover:bg-gray-100 p-1">
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  props: ['options', 'modelValue'],
  setup(props) {
    /*
    *  @description search input
    */
    let searchTerm = ref('')
    /*
    *  @description wether to diplay options or not
    */
    let showOptions = false;
    /*
    *  @description list of otions to be displayed
    */
    const searchOptions = computed(() => {
      if (searchTerm.value === '') {
        return []
      }
      let matches = 0
      var filteredOptions = props.options.filter(option => {
        if (option.label.toLowerCase().includes(searchTerm.value.toLowerCase()) && matches < 10) {
          matches++
          return option
        }
      })
      return filterUnique(filteredOptions)
    });
    
    /*
    *  @description only return list of unique values from a list
    */
    const filterUnique = (array)=>{
      var flags = [], output = [], l = array.length, i;
      for( i=0; i<l; i++) {
          if(flags[array[i].label]) continue;
          flags[array[i].label] = true;
          output.push(array[i]);
      }
      return output;
    }
    return {
      showOptions,
      searchTerm,
      searchOptions,
    }
  },
  methods: {
    
    /*
    *  @description allow display of list of options
    */
    allowOptionsDisplay() {
      this.showOptions = true;
    },
    
    /*
    *  @description select an option (called on option click)
    */
    selectOption(option) {
      this.searchTerm = option.label;
      this.showOptions = false;
      this.$emit('update:modelValue', option.label);
    }

  }
}
</script>
<style>
.optins-list {
  position: absolute;
  background-color: white;
  z-index: 1000;
  list-style-type: none;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
  overflow-y: auto;
  max-height: 300px;
}

.optins-list div {
  padding: 3px 35px;
  cursor: pointer;
}

.optins-list div:hover {
  background-color: #00000033;
}
</style>