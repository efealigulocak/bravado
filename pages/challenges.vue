<template>
  <div>
    <b-container fluid>
      <bravado-navigation></bravado-navigation>
    </b-container>
    <hr>
    <b-container fluid>
      <b-card title="All challenges">
        <b-card-text>
          If you can not find a challenge which satisfies,
          <nuxt-link to="/create-challenge">create a new challenge</nuxt-link>
        </b-card-text>
        <hr>
        <b-row>
          <b-col>
            <b-button-toolbar key-nav aria-label="Toolbar with button groups">
              <b-dropdown variant="outline-danger" class="mx-auto" right text="Sort by">
                <b-dropdown-item @click="getList({sort:`ASC`})">Ascending</b-dropdown-item>
                <b-dropdown-item @click="getList({sort:`DESC`})">Descending</b-dropdown-item>
              </b-dropdown>
              <b-dropdown variant="outline-danger" class="mx-auto" right text="Filters">
                <b-dropdown-item @click="getList({sort:`FINISHED`})">Finished</b-dropdown-item>
                <b-dropdown-item @click="getList({sort:`CONTINUING`})">Continuing</b-dropdown-item>
              </b-dropdown>
            </b-button-toolbar>
          </b-col>
          <b-col>
            <b-form class="mx-auto" inline>
              <b-input placeholder="Write keywords to search then enter" v-model="search"></b-input>

              <b-button @click="getList({search})">Submit</b-button>
            </b-form>
          </b-col>
        </b-row>
        <hr>
        <b-alert
          variant="warning"
          v-if="list && list.length < 1"
          show
        >Challenges are not found, please try again.</b-alert>
        <b-row class="pb-5">
          <b-card-group columns>
            <template v-for="(challenge,index) in list">
              <b-card :key="index">
                <nuxt-link
                  :to="{
                    name: `challenge`,
                    params: {
                      id : challenge.challengeId
                    }
                  }"
                >
                  <h3>{{challenge.title}}</h3>

                  <center>
                    <b-img :src="challenge.reward.imageURL" width="150" height="150"></b-img>
                  </center>
                </nuxt-link>
                <b-card-text>{{challenge.content}}</b-card-text>

                <div slot="footer">
                  <b-card-text
                    class="small text-muted float-left"
                  >Start date {{challenge.startDate | prettyDate}}</b-card-text>
                  <b-card-text
                    class="small text-muted float-right"
                  >Finish date {{challenge.finishDate | prettyDate}}</b-card-text>
                </div>
              </b-card>

              <hr v-if="index % 2 === 0 && index !== 0" :key="index">
            </template>
          </b-card-group>
        </b-row>
      </b-card>
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
      list: null,
      search: null,
      args: {}
    }
  },
  filters: {
    prettyDate: function(val) {
      return val.split('T')[0]
    }
  },
  async created() {
    if (this.$route.params !== undefined)
      this.args = {
        search: this.$route.params.search
      }
    this.getList()
    this.args = {}
  },
  methods: {
    getList: async function(args) {
      this.args = Object.assign(this.args, args)
      let { data } = await this.$axios.post(
        process.env.baseUrl + '/api/challenge/all',
        this.args,
        {
          headers: {
            authorization: `Bearer ${this.$store.state.auth.token}`
          }
        }
      )
      if (data.length)
        data = data.map(c => {
          c.reward = JSON.parse(c.reward)
          return c
        })
      this.list = data
    }
  }
}
</script>

<style>
</style>
