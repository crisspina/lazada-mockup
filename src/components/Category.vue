<template>
    <div class="category-card">
        <div>
            <img :src="category.img" :alt="category.name" class="img">
        </div>
        <span class="category-title">{{ category.name }}</span>
    </div>
</template>

<script>
export default {
    name: 'CategoryComponent',
    props: {
        category: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            categories: []
        }
    }
}
</script>

<style scoped>
.category-card {

    width: 100%;
    height: 100%;
    display: block;
    padding-left: auto;
    padding-right: auto;
    text-align: center;
    /* height: 148.5px; */
    border: 1px solid #e2e2e2;
    /* border-bottom: 1px solid #e2e2e2; */
    background-color: #fff;
    padding-top: 16px
}

img {
    width: 60%;

    @media screen and (min-width: 768px) {
        width: 80px;
    }
}

.category-title {
    text-align: center;
    overflow-wrap: break-word;
    font-size: 10px;

    @media screen and (min-width: 768px) {
        font-size: 14px;
    }
}
</style>