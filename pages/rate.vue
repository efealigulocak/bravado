<template>
<div>
    <b-container fluid>
        <bravado-navigation>
        </bravado-navigation>
        <hr>
        <b-row>
            <b-col md="3">
                <b-button block size="lg" variant="primary" href="/challenge">« Back to the challenge</b-button>
            </b-col>

       </b-row>
       <hr>
       <b-row>
           <b-col md="3" offset="1">
               <p id="submission">Rate Assignment</p>
           </b-col>
       </b-row>
       <b-row>
           <b-col md=11 offset=1>
                 <b-form-textarea
        id="textarea-large"
        rows="8"
        placeholder="Write your comment if you want."
      ></b-form-textarea>
           </b-col>
          
       </b-row>
       <hr>
       <b-row>
           <b-col sm=2 offset=8>
                <b-button block variant="danger">Unapprove</b-button>
           </b-col>
               <b-col sm=2>
                <b-button block variant="primary">Approve</b-button>
           </b-col>
       </b-row>
    </b-container>
</div>






</template>
<script>
import bravadoNavigation from '~/components/bravadoNavigation.vue'
export default {
  layout: 'user',
  components: { bravadoNavigation }
  
  }



</script>
<style>
#submission {
  font-size: 25px;
  background-color: #0275d8 ;
  text-align:center;
}





</style>