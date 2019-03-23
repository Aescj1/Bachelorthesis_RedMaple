<template>
  <v-container fill-height fluid grid-list-md>
    <v-layout class="workTile"  row wrap>

        <v-flex d-flex xs5 sm5 md5 xl5 lg5>
            <v-layout row wrap>
                <v-flex d-flex>
                    <v-card  max-height="70%" color="grey lighten-1" dark>
                    <v-card-title primary class="title">Geplant</v-card-title>
                    <Geplant class="test"/>
                    </v-card>
                </v-flex>

                <v-flex d-flex>
                    <v-card max-height="70%" color="grey lighten-1" dark>
                    <v-card-title primary class="title">Lauf</v-card-title>
                    <v-card-text>{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
      </v-flex>

        <v-flex d-flex xs5 sm5 md5 xl5 lg5>
            <v-layout row wrap>
                <v-flex d-flex>
                    <v-card max-height="70%" color="grey lighten-1" dark>
                    <v-card-title primary class="title">Extrahiert</v-card-title>
                    <v-card-text>{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>

                <v-flex d-flex>
                    <v-card max-height="70%" color="grey lighten-1" dark>
                    <v-card-title primary class="title">Sequenziert</v-card-title>
                    <v-card-text>{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
      </v-flex>

        <v-flex d-flex xs2 sm2 md2 xl2 lg2 align-content-center>
            <v-layout row wrap >
             <v-item-group class="item-group">
                <v-flex>
                    <v-btn @click="changeworkflow()" class="processButton" id="first" fab dark large color="purple">
                      G
                     </v-btn>
                </v-flex>
                <v-flex>
                    <v-btn class="processButton" fab dark large color="red">
                        E
                     </v-btn>
                </v-flex>
                <v-flex>
                    <v-btn class="processButton" fab dark large color="blue">
                        L
                     </v-btn>
                </v-flex>
                <v-flex>
                    <v-btn class="processButton" fab dark large color="green">
                        S
                     </v-btn>
                </v-flex>
                </v-item-group>
            </v-layout>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>
import Geplant from './Geplant.vue'

  export default {
    components:{
      Geplant
    },
    data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at
       clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }),
    methods:{
      changeworkflow(){
                this.$router.push('/geplant')
      },
    },
  }
</script>

<style>
.workTile{
    height:-webkit-fill-available !important;
}
.item-group{
  width:-webkit-fill-available !important;
  text-align: center;
}
.processButton{
  font-size: 3rem;
  margin-bottom: 50px;
}
#first{
  margin-top: 9rem;

}
.test{
  max-height: 10%;
}
</style>