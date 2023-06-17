<template>
    <div class="card">
        <div class="img-box">
            <img :src="product.img" alt="" class="img-product">
        </div>
        <div class="content">
            <div class="title">
                <span class="product-name">{{ product.title }}</span>
            </div>
            <div class="price">
                <span class="currency-price">฿{{ product.price }}</span> <br>
                <div>
                    <span class="original-price">฿{{ product.discountPrice }}</span> <span class="discount">-{{
                        product.discount
                    }}%</span>
                </div>
            </div>

            <div v-if="rate">

                <span v-for="index in product.rate" :key="index" :class="starClasses(index)">&#9733;</span>

                <span class="rating-comment">({{ product.comment }})</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        rate: {
            type: Boolean
        },
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        starClasses(index) {
            return {
                'filled': index <= Math.floor(this.rating), // Full star for integer rating
                'half-filled': index === Math.ceil(this.rating) && !Number.isInteger(this.rating) // Half-filled star for fractional rating
            };
        }
    }

};
</script>

<style scoped>
.card {

    background-color: white;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
}

.content {
    text-align: start;
}

.rating-comment {
    font-size: 12px;
    color: #9e9e9e;
}

.original-price {
    color: #9e9e9e;
    text-decoration: line-through;
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 4px;

    @media screen and (min-width: 768px) {
        font-size: 12px;
    }
}

.discount {
    color: black;
    font-size: 12px;
    line-height: 12px;

    @media screen and (min-width: 768px) {
        font-size: 10px;
    }
}

.currency-price {
    margin-bottom: 4px;
    font-size: 15px;
    color: #f57224;
    line-height: 22px;
    height: 22px;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
}

.img-product {
    width: 100%;
    height: 100%;
}

.product-name {
    width: 100%;
    text-align: start;
    height: 36px;
    line-height: 18px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 4px;
    font-size: 14px;
}
</style>