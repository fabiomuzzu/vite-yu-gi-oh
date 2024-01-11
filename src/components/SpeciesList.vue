<script>
import { store } from '../store';

export default {
    name: 'specis',

    data() {
        return {
            store,
        };
    },
}

</script>

<template>
    <div class="species-list-container" @click="$emit('totalSearch')">
        <select name="specie" id="cars" class="specie" @click="$emit('search')" v-model="store.searchWord">
            <option v-for="types in this.store.type" :value="types.archetype_name"> {{ types.archetype_name }}</option>
        </select>
        <div class="button" @click="$emit('reset')">
            <button>reset</button>
        </div>
        <div class="number-Total-Cards">
            <h5>il numero delle carte cercate è: {{ this.store.totalOfTheCardsNumber }}</h5>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use'../../style/partial/_variables.scss' as *;

.species-list-container {
    margin-left: 8%;
    padding: 24px 0;
    display: flex;

    .specie {
        border: none;
        padding: 10px 90px 10px 10px;
        border-radius: 7px;
        border: 1px solid rgb(169, 169, 169);
    }

    .specie,
    button {
        border: none;
        border-radius: 7px;
        border: 1px solid rgb(169, 169, 169);
    }

    .button {

        margin-left: 10px;

        button {
            padding: 10px;
        }
    }

    .number-Total-Cards {
        border: 1px solid rgb(137, 137, 137);
        background-color: rgb(124, 81, 0);
        margin-left: 25px;

        h5 {
            padding: 10px;
            color: rgb(242, 242, 242);
        }
    }
}</style>
