<script>
import Logo from './Logo.vue';
export default {
    name: 'header',
    components: {
        Logo,
    }
}
</script>

<template>
    <header id="header">
        <Logo />
        <div>
            <h1>Yu-Gi-Ho API</h1>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use'../style/partial/_variables.scss' as *;

#header {
    height: 70px;
    display: flex;
    align-items: center;
}
</style>