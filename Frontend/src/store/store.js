import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{
        drawerState: false,
        darkTheme:true,
        NgsList:[
            {
                bactNr: '23611-19',
                wiederholung:'',
                infOldList: '',
                altId: '',
                priority:'B',
                abbreviation: 'aciint',
                lastName: 'Peter',
                firstName:'Müller',
                birthdate: '12.03.1950',
                entry: '13.11.2018',
                abnahmeDatum: '14.11.2018',
                einsender: 'Spital Basel',
                station: 'Intensiv',
                bearbeitung: '16.11.2018',
                material: 'Blut',
                ngsProject: 'NGS000012',
                datumPrep: '10.11.2018',
                konzentration: '34',
                visumDna: 'BMA',
                runNr: '00542',
                runProbeNr: 'NGS4230498',
                libraryTyp: 'next Generation',
                libraryDatum: '20.08.2017',
                libraryVisum: 'BMA',
                seqDatum: '20.11.2018',
                modalität: 'NextSeq',
                datenqualVisum: 'BMA',
                publicIdentifier: '00003',
                process: 1,
        
                  },
                       {
                bactNr: '31225-18',
                wiederholung:'',
                infOldList: '',
                altId: '',
                priority:'A',
                abbreviation: 'ciint',
                lastName: 'Walter',
                firstName:'Reyes',
                birthdate: '12.03.1950',
                entry: '13.11.2018',
                abnahmeDatum: '14.11.2018',
                einsender: 'Spital Basel',
                station: 'Intensiv',
                bearbeitung: '16.11.2018',
                material: 'Blut',
                ngsProject: 'NGS000012',
                datumPrep: '10.11.2018',
                konzentration: '34',
                visumDna: 'BMA',
                runNr: '00542',
                runProbeNr: 'NGS4230498',
                libraryTyp: 'next Generation',
                libraryDatum: '20.08.2017',
                libraryVisum: 'BMA',
                seqDatum: '20.11.2018',
                modalität: 'NextSeq',
                datenqualVisum: 'BMA',
                publicIdentifier: '00003',
                process: 2,
        
                  },
                       {
                bactNr: '31233-19',
                wiederholung:'',
                infOldList: '',
                altId: '',
                priority:'B',
                abbreviation: 'bciint',
                lastName: 'Müller',
                firstName:'Hans',
                birthdate: '12.05.1950',
                entry: '13.11.2018',
                abnahmeDatum: '12.11.2018',
                einsender: 'Spital Bern',
                station: 'Intensiv',
                bearbeitung: '16.11.2018',
                material: 'Blut',
                ngsProject: 'NGS000012',
                datumPrep: '10.11.2018',
                konzentration: '34',
                visumDna: 'BMA',
                runNr: '00542',
                runProbeNr: 'NGS4230498',
                libraryTyp: 'next Generation',
                libraryDatum: '20.08.2017',
                libraryVisum: 'BMA',
                seqDatum: '20.11.2018',
                modalität: 'NextSeq',
                datenqualVisum: 'BMA',
                publicIdentifier: '00003',
                process: 3,
                  },
                     {
                bactNr: '31641-18',
                wiederholung:'',
                infOldList: '',
                altId: '',
                priority:'A',
                abbreviation: 'aciint',
                lastName: 'Walter',
                firstName:'Reyes',
                birthdate: '12.03.1950',
                entry: '13.11.2018',
                abnahmeDatum: '14.11.2018',
                einsender: 'Spital Basel',
                station: 'Intensiv',
                bearbeitung: '16.11.2018',
                material: 'Blut',
                ngsProject: 'NGS000012',
                datumPrep: '10.11.2018',
                konzentration: '34',
                visumDna: 'BMA',
                runNr: '00542',
                runProbeNr: 'NGS4230498',
                libraryTyp: 'next Generation',
                libraryDatum: '20.08.2017',
                libraryVisum: 'BMA',
                seqDatum: '20.11.2018',
                modalität: 'NextSeq',
                datenqualVisum: 'BMA',
                publicIdentifier: '00003',
                process: 4,
                  },
                       {
                bactNr: '31255-18',
                wiederholung:'',
                infOldList: '',
                altId: '',
                priority:'A',
                abbreviation: 'ciint',
                lastName: 'Walter',
                firstName:'Reyes',
                birthdate: '12.03.1950',
                entry: '13.11.2018',
                abnahmeDatum: '14.11.2018',
                einsender: 'Spital Basel',
                station: 'Intensiv',
                bearbeitung: '16.11.2018',
                material: 'Blut',
                ngsProject: 'NGS000012',
                datumPrep: '10.11.2018',
                konzentration: '34',
                visumDna: 'BMA',
                runNr: '00542',
                runProbeNr: 'NGS4230498',
                libraryTyp: 'next Generation',
                libraryDatum: '20.08.2017',
                libraryVisum: 'BMA',
                seqDatum: '20.11.2018',
                modalität: 'NextSeq',
                datenqualVisum: 'BMA',
                publicIdentifier: '00003',
                process: 1,
                  },
                       {
                bactNr: '31263-19',
                wiederholung:'',
                infOldList: '',
                altId: '',
                priority:'B',
                abbreviation: 'bciint',
                lastName: 'Müller',
                firstName:'Hans',
                birthdate: '12.05.1950',
                entry: '13.11.2018',
                abnahmeDatum: '12.11.2018',
                einsender: 'Spital Bern',
                station: 'Intensiv',
                bearbeitung: '16.11.2018',
                material: 'Blut',
                ngsProject: 'NGS000012',
                datumPrep: '10.11.2018',
                konzentration: '34',
                visumDna: 'BMA',
                runNr: '00542',
                runProbeNr: 'NGS4230498',
                libraryTyp: 'next Generation',
                libraryDatum: '20.08.2017',
                libraryVisum: 'BMA',
                seqDatum: '20.11.2018',
                modalität: 'NextSeq',
                datenqualVisum: 'BMA',
                publicIdentifier: '00003',
                process: 3,
                  },
        ],
        currentDataset1: {
            bactNr: '',
            wiederholung:'',
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
          },
          currentDataset2: {
            bactNr: '',
            wiederholung:'',
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
            datenqualVisum: '',
            publicIdentifier: '',
            process:'',
          },
          currentDataset3: {
            bactNr: '',
            wiederholung:'',
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
            process:'',
          },
          currentDataset4: {
            bactNr: '',
            wiederholung:'',
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
            datenqualVisum: '',
            publicIdentifier: '',
            process:'',
          },
    },
    setters:{
        changeDrawerState: state =>{
            state.drawerState = !state.drawerState;
        }
    }
});