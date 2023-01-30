<template>
    <header>
        <ul>
            <li>
                <nuxt-link to="/">HOME</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/deck">DECK</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/profile">PROFILE</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/settings">SETTINGS</nuxt-link>
            </li>
        </ul>
    </header>
</template>

<style lang="scss">
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
    Header {
        min-height: 60px;
        background-color: rgb(64, 64, 64);
        display:flex;
        align-items: center;
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            max-width:1280px;
            width: 100%;
            margin: 0 auto;
            li{
                list-style: none;
                width: calc(100% / 4);
                a{
                    text-decoration: none;
                    color: white;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                & .nuxt-link-exact-active{
                    color: red;
                }
            }
        }
    }

</style>