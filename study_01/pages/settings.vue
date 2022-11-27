<template>
    <div class="wrap">
        <div class="nav">
            <ul>
                <li><nuxt-link to="/settings">General</nuxt-link></li>
                <li><nuxt-link to="/settings/Deck">Deck</nuxt-link></li>
                <li><nuxt-link to="/settings/Schedule">Schedule</nuxt-link></li>
            </ul>
        </div>
        <main class="main">
            <nuxt-child />
        </main>
    </div>
</template>

<style lang="scss">
.wrap {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    .nav {
        ul{
            display: flex;
            li{
                width: calc(100% / 3);
            }
        }
    }
}
</style>