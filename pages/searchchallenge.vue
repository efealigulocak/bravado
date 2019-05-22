<template>
<div>
    <b-container fluid>
    <bravado-navigation></bravado-navigation>
    </b-container>
    ,<hr>
    <b-container id="list" fluid>
        <b-row>
            <b-col md="5">
                <div id="choose" class="p-2 mb-2 bg-primary text-white">Choose Categories</div>
                </b-col>
                <b-col md="4">
                    <b-form-input size="lg" class="mr-sm-2" placeholder="Write a challenge topic"></b-form-input>

                </b-col>
                <b-col md="3">
                   <b-button block size="lg"  variant="primary">Search a challenge</b-button>
                   
                    </b-col>
                    

        </b-row>
        <b-row>
            <b-col sm="5">
                <b-form-select v-model="selected" :options="options" :select-size="20"></b-form-select>
                <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
            </b-col>
            </b-row>
    </b-container>

</div>
</template>
<script>
import bravadoNavigation from '~/components/bravadoNavigation.vue'
export default {
layout: 'user',
 components: { bravadoNavigation },
  data() {
      return {
        selected: null,
        options: [
          { value: 'a', text: 'Item 1' },
          { value: 'b', text: 'Item 2' },
          { value: 'c', text: 'Item 3' },
          { value: 'd', text: 'Item 4', },
          { value: 'e', text: 'Item 5' },
          { value: 'f', text: 'Item 6' },
          { value: 'g', text: 'Item 6' },
          { value: 'h', text: 'Item 7' },
          { value: 'i', text: 'Item 8' },
          { value: 'j', text: 'Item 9', },
          { value: 'k', text: 'Item 10' }
         
        ]
      }
    }
}

   
</script>
<style>
#choose{
    font-size:25px;
    text-align: center;
    color:rgb(0, 255, 221);

}

</style>