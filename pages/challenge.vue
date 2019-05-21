<template>
<b-container fluid>
  <bravado-navigation></bravado-navigation>
  <hr>
  <b-row class="justify-content-md-center">
    <b-button size="lg" href="/assignment" variant="primary">Submit Assignment</b-button>
    

      </b-row>
      <hr>
      <b-row class="justify-content-md-center"> 
          <b-col md="6">
                <b-card no-body>
    <b-tabs pills card>
      <b-tab title="About" active><b-card-text>Tab Contents 1<br></b-card-text></b-tab>
      <b-tab title="Feeds"><b-card-text>Tab Contents 2</b-card-text></b-tab>
      <b-tab title="Participiants"><b-card-text>Tab Contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>

              </b-col>
          </b-row>
          <hr>
          <b-row class="justify-content-md-center">
              <b-button size="lg" variant="danger" v-b-modal.giveup>Give Up Challenge</b-button>
          <b-modal id="giveup" title="Are you sure you want to leave the challenge?">
            </b-modal>
              </b-row>
</b-container>






</template>

<script>
import bravadoNavigation from '~/components/bravadoNavigation.vue'

export default { 
  layout: 'user',
  components: { bravadoNavigation },
  
}
</script>






<style>
</style>