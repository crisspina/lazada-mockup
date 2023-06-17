<template>
    <div class="card">
        <div class="cover-card">
            <img src="https://lzd-img-global.slatic.net/live/th/p/cc2569d9b30b35cebe6f669f2dd08b51.jpg_400x400q80.jpg_.webp"
                alt="" class="cover-image">
        </div>
        <div class="logo-card">
            <img src="https://lzd-img-global.slatic.net/g/shop/d002c3e9c782a1bf69d8e6dd2afdfa7a.jpeg_120x120q80.jpg_.webp"
                alt="" class="logo-image">
        </div>
        <div class="body-card">
            <span class="header">CB Cotton</span>
            <p class="sub">CB Cotton</p>
        </div>
    </div>
</template>

<script >
export default {
    name: 'OfficialProductCard',
    props: {
        official: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
.card {
    background-color: #fff;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
}

.cover-card {

    overflow: hidden;
    background-color: #fff;
}

.cover-image {
    width: 100%;
    height: 100%;
}

.logo-image {
    width: 100%;
}


.logo-card {
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, .25);
    width: 25px;
    height: 25px;
    background-color: #fff;
    padding: 4px;
    position: relative;
    margin: -25px auto 0;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        width: 52px;
        height: 52px;
    }
}

.body-card {
    background-color: #fff;
    text-align: center;
}

.header {
    font-size: 14px;
    color: #212121;
    line-height: 18px;
    margin: 8px 8px 4px;
    position: relative;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.sub {
    font-size: 12px;
    line-height: 14px;
    color: #9e9e9e;
    margin: 0 8px;
    position: relative;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>