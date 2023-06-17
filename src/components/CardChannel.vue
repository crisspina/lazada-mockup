<template>
    <div v-for="data in datas" :key="data.id" class="box">
        <div class="img-wrap">
            <img :src="data.imgURL" :alt="data.title" class="img">
        </div>
        <span class="title">{{ data.title }}</span>
    </div>
</template>

<script >
export default {
    name: 'CardChannel',
    props: {
        datas: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
.box {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    background-color: white;
    /* padding: 0.5em; */
    border-radius: 20px;
    height: 40px;
    width: 100%;

}

.title {
    margin-left: 4px;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
}

.img-wrap {
    margin: 4px;
    width: 32px;
    height: 32px;
}


.img {
    width: 100%;
    height: 100%;

}
</style>