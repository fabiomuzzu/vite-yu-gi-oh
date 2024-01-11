<script>
import axios from 'axios';
import { store } from '../store';
import SpeciesList from './SpeciesList.vue';
import CardsContainer from './CardsContainer.vue';

export default {
    name: 'main',
    components: {
        CardsContainer,
        SpeciesList,
    },

    data() {
        return {
            store,
        };
    },
    methods: {

        newSearch() {
            // chiamata api generale
            axios.get(this.store.apiURL + '?archetype=' + this.store.searchWord).then((response) => {
                this.store.itemCard = response.data.data;
            });
            // chiamata api lista archetype
            axios.get(this.store.archetypeUrl).then((response) => {
                this.store.type = response.data;
            });
        },

        // funzione reset dopo ricerca 
        allReset() {
            axios.get(this.store.apiURL).then((response) => {
                this.store.itemCard = response.data.data;
            });
            this.store.searchWord = '';
        },
        // funzione che restituisce il totale delle carte cercate perchè l'api che usiamo prende solo i primi 20 elementi 
        totalComponents() {
            axios.get(this.store.newApiURL + '?archetype=' + this.store.searchWord).then((response) => {
                this.store.totolaCards = response.data.data;
                this.store.totalOfTheCardsNumber = this.store.totolaCards.length;
                console.log('tot ' + this.store.totalOfTheCardsNumber);
            });
        }

    },
    // chimata axios 
    created() {
        this.newSearch();
        this.allReset();
        this.totalComponents();
    },
};

</script>

<template>
    <main id="main">
        <!-- ricerca carte per tipo -->
        <SpeciesList @search="newSearch" @reset="allReset" @totalSearch="totalComponents" />

        <!-- struttura a 2 main per ilclusione delle singole carte che avviene nel file //CardsContainer// -->
        <CardsContainer :itemCard="this.store.itemCard" />
    </main>
</template>

<style scoped lang="scss">
@use'../../style/partial/_variables.scss' as *;

#main {
    background-color: $bg-orange-main;
}
</style>
