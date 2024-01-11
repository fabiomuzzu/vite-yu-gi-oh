import {reactive} from 'vue';

export const store = reactive({
   itemCard: [],
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    archetypeUrl:'https://db.ygoprodeck.com/api/v7/archetypes.php',
    type: [],
    searchWord: '',
    newApiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    totalOfTheCardsNumber: 0,
});