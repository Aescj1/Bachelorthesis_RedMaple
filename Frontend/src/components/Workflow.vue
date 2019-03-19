<template>
  <v-container fill-height fluid grid-list-md>
    <v-layout class="workTile"  row wrap>

        <v-flex d-flex xs5 sm5 md5 xl5 lg5>
            <v-layout row wrap>
                <v-flex d-flex>
                    <v-card color="purple" dark>
                    <v-card-title primary class="title">Geplant</v-card-title>
                    <v-card-text>{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>

                <v-flex d-flex>
                    <v-card color="blue lighten-2" dark>
                    <v-card-title primary class="title">Sequenzierungslauf</v-card-title>
                    <v-card-text>{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
      </v-flex>

        <v-flex d-flex xs5 sm5 md5 xl5 lg5>
            <v-layout row wrap>
                <v-flex d-flex>
                    <v-card color="red" dark>
                    <v-card-title primary class="title">Extrahiert</v-card-title>
                    <v-card-text>{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>

                <v-flex d-flex>
                    <v-card color="green" dark>
                    <v-card-title primary class="title">Sequenziert</v-card-title>
                    <v-card-text>{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
      </v-flex>

        <v-flex d-flex xs2 sm2 md2 xl2 lg2  >
            <v-layout row wrap>
                <v-flex d-flex>
                    <v-btn  dark large color="black">
                        <v-icon >Test</v-icon>
                     </v-btn>
                </v-flex>

                <v-flex d-flex>
                    <v-btn  dark large color="grey">
                        <v-icon >Test</v-icon>
                     </v-btn>
                </v-flex>
            </v-layout>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at
       clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    })
  }
</script>

<style>
.workTile{
    height:-webkit-fill-available !important;
}
</style>