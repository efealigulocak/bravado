<template>
<div>
<b-container fluid>
<bravado-navigation></bravado-navigation>
<hr>
</b-container>
<b-container  fluid>

<b-row>

    <b-col md="4"><b-button size="lg" href="/challenge">Back to Challenge</b-button></b-col>

</b-row>
<hr>
<b-row>
    <b-col md="3">
    <div id="assignment" class="p-3 mb-2 bg-primary text-white">Assignment</div>
    </b-col>
</b-row>
<b-row>
    <b-col md="12">
    <b-form-textarea
    id="textarea-state"
      v-model="text"
      :state="text.length >= 50"
      placeholder="Enter at least 50 characters"
      rows="12"
    
  ></b-form-textarea>
    </b-col>
</b-row>
<hr>
<b-row>
    <b-col  offset-md="11">
    <b-button size="lg" variant="primary">Send</b-button>

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
        text: ''
      }
    }
}
</script>
<style>

#assignment{
  font-size: 30px;
text-align: center;

 
}
</style>