<script>
export default {
    name: 'cards',

    props: ['name', 'type', 'img']
}

</script>

<template>
    <div class="card">
        <div class="card-img">
            <img :src="img" alt="img">
        </div>
        <div class="info-text">
            <h4><strong>{{ name }}</strong></h4>
            <p>{{ type }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use'../../style/partial/_variables.scss' as *;

.card {
    width: calc((100% / 5) - 20px);
    background-color: $bg-orange-main;

    .card-img img {
        width: 100%;
        display: block;
    }

    .info-text {
        text-align: center;
        padding-top: 30px;

        h4 {
            color: white;
            margin-bottom: 30px;
            text-transform: uppercase;
        }
    }
}</style>
