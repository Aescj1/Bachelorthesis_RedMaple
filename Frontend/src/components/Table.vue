<template>
  <v-data-table
    :headers="renderHeader()"
    :items="patients"
    class="elevation-1"
    item-key="bactNr"
    :search="search"
    must-sort
    v-bind:pagination.sync="pagination"



  >
<template slot="items" slot-scope="props">
   <tr @click="props.expanded = !props.expanded">
        <!--The v-if statements checks the state for the tabs and sets the information accordingly !-->
        <td class="justify-center layout px-0" ></td>
        <td class="text-xs-left" v-if="!headers[1].hide">{{props.item.bactNr}}</td> 
        <td v-if="!headers[2].hide" class="text-xs-center">{{ props.item.altId }}</td>
        <td v-if="!headers[3].hide" class="text-xs-center">{{ props.item.priority }}</td>
        <td v-if="!headers[4].hide" class="text-xs-center">{{ props.item.abbreviation }}</td>
        <td v-if="!headers[5].hide" class="text-xs-center">{{ props.item.lastName }}</td>
        <td v-if="!headers[6].hide" class="text-xs-center">{{ props.item.birthdate }}</td>
        <td v-if="!headers[7].hide" class="text-xs-center">{{ props.item.entry }}</td>
        <td v-if="!headers[8].hide" class="text-xs-center">{{ props.item.abnahmeDatum }}</td>
        <td v-if="!headers[9].hide" class="text-xs-center">{{ props.item.einsender }}</td>
        <td v-if="!headers[10].hide" class="text-xs-center">{{ props.item.station }}</td>
        <td v-if="!headers[11].hide" class="text-xs-center">{{ props.item.bearbeitung }}</td>
        <td v-if="!headers[12].hide" class="text-xs-center">{{ props.item.material }}</td>
        <td v-if="!headers[13].hide" class="text-xs-center">{{ props.item.ngsProject }}</td>
        <td v-if="!headers[14].hide" class="text-xs-center">{{ props.item.datumPrep }}</td>
        <td v-if="!headers[15].hide" class="text-xs-center">{{ props.item.konzentration }}</td>
        <td v-if="!headers[16].hide" class="text-xs-center">{{ props.item.visumDna }}</td>
        <td v-if="!headers[17].hide" class="text-xs-center">{{ props.item.runNr }}</td>
        <td v-if="!headers[18].hide" class="text-xs-center">{{ props.item.runProbeNr }}</td>
        <td v-if="!headers[19].hide" class="text-xs-center">{{ props.item.libraryTyp }}</td>
        <td v-if="!headers[20].hide" class="text-xs-center">{{ props.item.libraryDatum }}</td>
        <td v-if="!headers[21].hide" class="text-xs-center">{{ props.item.libraryVisum }}</td>
        <td v-if="!headers[22].hide" class="text-xs-center">{{ props.item.seqDatum }}</td>
        <td v-if="!headers[23].hide" class="text-xs-center">{{ props.item.modalität }}</td>
        <td v-if="!headers[24].hide" class="text-xs-center">{{ props.item.seqVisum }}</td>
        <td v-if="!headers[25].hide" class="text-xs-center">{{ props.item.datenqualVisum }}</td>
        <td v-if="!headers[26].hide" class="text-xs-center">{{ props.item.publicIdentifier }}</td>
      </tr>
      </template>
      <template slot="expand" slot-scope="props">
      <v-card class="text-xs-center" flat>
        <v-card-text  style="background-color:grey"><b>Current BactNr.: </b>{{props.item.bactNr}} <b>| Current NGS Project:</b> {{props.item.ngsProject}}</v-card-text>
      </v-card>
    </template>
  </v-data-table>
</template>

<script>
import {bus} from '../main.js';
//import axios from 'axios';

  export default {
    props:{
      state:Number
    },
    data: () => ({
      pagination : {'sortBy': 'priority', 'ascending': true, 'rowsPerPage': 10},
      headerindex:0,
      headers: [
        { class:'dataSet',property: 3, text: 'Bact Nr-', sortable: true, value: 'bactNr', hide: false},
        { property: 3, text: 'Alternative ID', value: 'altId', hide: false },
        { property: 3,text: 'priority', value: 'priority' , hide: false},
        { property: 3,text: 'Pathogen', value: 'abbreviation' , hide: false},
        { class:'dataSet',property: 3,text: 'Patient', value: 'lastName' , hide: false},
        { property: 3,text: 'Geburtsdatum', value: 'birthdate', hide: false },
        { property: 3,text: 'Eingang', value: 'entry', sortable: false, hide: false },
        { property: 3,text: 'abnahmeDatum', value: 'abnahmeDatum', hide: false },
        { property: 3,text: 'Einsender', value: 'einsender', hide: false },
        { property: 3,text: 'Station', value: 'station', hide: false },
        { property: 3,text: 'Bearbeitung', value: 'bearbeitung', hide: false },
        { property: 3,text: 'Material', value: 'material', hide: false },
        { property: 3,text: 'NGS-Projekt', value: 'ngsProject', hide: false },
        { property: 2,text: 'Datum DNA-Prep', value: 'datumPrep', hide: false },
        { property: 2,text: 'DNA-Konz (ng/ul)', value: 'konzentration', hide: false },
        { property: 2,text: 'Visum DNA', value: 'visumDna', hide: false },
        { property: 0,text: 'Run Nummer', value: 'runNr', hide: false },
        { property: 0,text: 'NGS Nummer', value: 'runProbeNr', hide: false },
        { property: 0,text: 'Library Typ', value: 'libraryTyp', hide: false },
        { property: 0,text: 'Datum Library', value: 'libraryDatum', hide: false },
        { property: 0,text: 'Visum Library', value: 'libraryVisum', hide: false },
        { property: 0,text: 'Datum Sequenzierung', value: 'seqDatum', hide: false },
        { property: 0,text: 'NGS Gerät', value: 'modalität' , hide: false},
        { property: 0,text: 'Visum Datenqualität', value: 'datenqualVisum' , hide: false},
        { property: 0,text: 'Information alte Liste', value: 'infOldList' , hide: false},
        { property: 0,text: 'Public identifier', value: 'publicIdentifier' , hide: false},
      ],
      search:'',
      tabs: null,
    patients: [],
      editedIndex: -1,
      editedPatient: {
        bactNr: '',
        infOldList: '',
        altId: '',
        priority:'',
        abbreviation: '',
        lastName: '',
        firstName:'',
        patName: '',
        birthdate: '',
        entry: '',
        abnahmeDatum: '',
        einsender: '',
        station: '',
        bearbeitung: '',
        material: '',
        ngsProject: '',
        datumPrep: '',
        konzentration: '',
        visumDna: '',
        runNr: '',
        runProbeNr: '',
        libraryTyp: '',
        libraryDatum: '',
        libraryVisum: '',
        seqDatum: '',
        modalität: '',
        datenqualVisum: '',
        publicIdentifier: '',
      },
       defaultPatient: {
        bactNr: '',
        infOldList: '',
        altId: '',
        priority:'',
        abbreviation: '',
        lastName: '',
        firstName:'',
        birthdate: '',
        entry: '',
        abnahmeDatum: '',
        einsender: '',
        station: '',
        bearbeitung: '',
        material: '',
        ngsProject: '',
        datumPrep: '',
        konzentration: '',
        visumDna: '',
        runNr: '',
        runProbeNr: '',
        libraryTyp: '',
        libraryDatum: '',
        libraryVisum: '',
        seqDatum: '',
        modalität: '',
        seqVisum:'',
        datenqualVisum: '',
        publicIdentifier: '',
      }
    }),
       computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    }, 

    created () {
      bus.$on('newPatientCreated', (data) =>{
      this.editedPatient = data;
      this.patients.push(this.editedPatient)
      
      });
      bus.$on('patientHasChanged', (data) =>{
      this.editedPatient = data;

      });
      bus.$on('editedIndex', (data) =>{
      this.editedIndex = data;
      this.patients.splice(this.editedIndex,1,this.editedPatient)
      });
      bus.$on('searchChanged', (data) =>{
      this.search = data;
      });
      bus.$on('hideHeader', (data) =>{
      this.headers[this.headerindex].hide = !this.headers[this.headerindex].hide
      console.log("this is the receiving index:"+this.headerindex+"; this is the data"+data+"; this is the headerindex"+this.headerindex)
      });
    },


    methods: {
      initialize () {
      },
      /*This method grabs all the headers in header[] and checks its property, compares it with
      the state from the tab (which get provided by the Tableframe) and sets the tableheaders
      accordingly */
      renderHeader(){
        return this.headers.filter(h => (h.property>= this.state)).filter(h => h.hide == false)
      },
    }
  }
  </script>

<style>
.dataSet{
  max-height: 50px;
  min-width: 130px;
}
</style>
