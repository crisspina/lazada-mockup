<template>
    <div class="header-content">
        <div class="menu-bar">
            <div class="menu-content">
                <div class="title">
                    <span>SAVE MORE ON APP</span>
                </div>
                <div class="title">
                    <span>SELL ON LAZADA</span>
                </div>
                <div class="title">
                    <span>CUSTOMER CARE</span>
                </div>
                <div class="title">
                    <span>TRACK MY ORDER</span>
                </div>
                <div class="title">
                    <span>LOGIN</span>
                </div>
                <div class="title">
                    <span>SIGNUP</span>
                </div>
                <div class="title">
                    <span>เปลี่ยนภาษา</span>
                </div>
            </div>
        </div>
        <div class="search-bar">
            <div class="logo">
                <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1KB2laMFY.1VjSZFnXXcFHXXa.png" alt=""
                    class="lazada-logo">
            </div>
            <div>
                <input type="text" placeholder="Search in Lazada" class="search-input">
            </div>
            <div class="">

                <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB18s7ESBr0gK0jSZFnXXbRRXXa.jpg" alt=""
                    class="banner-img">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'MenuBar',

}
</script>
<style scoped>
.title {
    font-size: 12px;
    height: 25px;
    line-height: 25px;
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
    color: #9e9e9e;
    -webkit-transition: color .2s;
    transition: color .2s;
    padding: 0 17px;
}

.search-input {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0.5m 0.5em;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0;
    color: #212121;
    border: none;
    outline: none;
    background: #eff0f5;
    box-shadow: none;
    border-radius: 2px;

    @media screen and (min-width: 768px) {
        width: 500px;
        padding: 0.5em 1em;
    }
}

.menu-bar {

    text-align: right;

}

.menu-content {

    display: inline-flex;
    flex-wrap: wrap;

    @media screen and (min-width: 768px) {}
}

.search-bar {
    display: flex;
    align-items: center;

    row-gap: 0.5rem;
    column-gap: 0.5rem;
    justify-content: space-around;
    width: 100%;
    background-color: white;
    padding-top: 1em;
    padding-bottom: 1em;

    @media screen and (min-width: 768px) {}
}

.lazada-logo {

    height: 20px;

    @media screen and (min-width: 768px) {
        width: 127px;
        height: 40px;
    }
}

.banner-img {
    height: 20px;
    display: block;

    @media screen and (min-width: 768px) {
        width: 188px;
        height: 45px;

    }
}
</style>