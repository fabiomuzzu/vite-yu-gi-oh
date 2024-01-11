<script>
import { store } from '../store';
import NumberOfCards from './NumberOfCards.vue';
import Cards from './Cards.vue';
export default {
    name: 'cardsContainer',

    components: {
        NumberOfCards,
        Cards,
    },

    data() {
        return {
            store,
        };
    },
}

</script>

<template>
    <div class="main-container">
        <NumberOfCards :found="this.store.itemCard" />
        <div class="cards-container">
            <Cards v-for="cards in this.store.itemCard" :img="cards.card_images[0].image_url" :name="cards.name"
                :type="cards.archetype" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use'../../style/partial/_variables.scss' as *;

.main-container {
    background-color: $col-white;
    width: 85%;
    padding: 48px;
    margin: 0 auto;

    .cards-container {
        height: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 25px;
    }
}
</style>
