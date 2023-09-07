<template>
    <div class="">
    <p>test developppppp</p>
    <span>wowza hahaha</span>
        <div class="slide-banner">
            <img src="https://icms-image.slatic.net/images/ims-web/22660af4-6bfe-4e06-aa4b-8d7a95050f16.jpg" alt=""
                class="banner" />
        </div>
        <div class="card-channel-wrap">
            <CardChannel :datas="items" class="card-channel"></CardChannel>
        </div>

        <div class="flashsale">
            <h3 class="flashsale-title">Flash Sale</h3>
            <div class="">
                <div class="white-box">
                    <div class="content-header">
                        <div class="left">
                            <div>
                                <span class="content-top">On SaleNow</span>
                            </div>
                            <div class="flashsale-time display-flex">
                                <div class="wrap-time">
                                    <span>Ending in</span>
                                    <div class="time-card">
                                        00
                                    </div>
                                    <span>:</span>
                                    <div class="time-card">
                                        00
                                    </div>
                                    <span>:</span>
                                    <div class="time-card">
                                        00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="shop-button">SHOP ALL PRODUCTS</button>
                    </div>

                    <hr>
                    <div class="product-wrap display-flex">
                        <div v-for="item in products" :key="item.id" class="product-item">
                            <ProductCard :rate="false" :product="item" class="product-card"></ProductCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="LazMall">
            <div class="display-flex lazmall-header">
                <h3 class="">LazMall</h3>
                <div class="shop-mall-button">
                    Shop Mall <vue-feather type="chevron-right"></vue-feather>
                </div>
            </div>

            <div class="product-wrap display-flex">
                <div v-for="(item, index) in 6" :key="index" class="product-official">
                    <OfficialProductCard :official="item"></OfficialProductCard>
                </div>
            </div>
        </div>
        <div class="categories">
            <h3 class="">Categories</h3>
            <div class="categories-wrap ">
                <div v-for="item in categories" :key="item.id" class="category-item">
                    <Category :category="item"></Category>
                </div>
            </div>
        </div>
        <div class="just-for-you">
            <h3 class="">Just For You</h3>
            <div class="product-wrap display-flex">
                <div v-for="item in products" :key="item.id" class="product-item">
                    <ProductCard :rate="true" :product="item" class="product-card"></ProductCard>
                </div>
                <div v-for="item in products" :key="item.id" class="product-item">
                    <ProductCard :rate="true" :product="item" class="product-card"></ProductCard>
                </div>
            </div>
            <button class="loadmore">Load More</button>
        </div>
        <hr>
        <div class="display-flex bottom-banner">
            <img src="https://icms-image.slatic.net/images/ims-web/888209b8-a1b1-4d44-8497-0e22c88dfed2.jpg" alt=""
                class="bottom-banner-img">
            <img src="https://icms-image.slatic.net/images/ims-web/7dc7c8e2-aa43-4323-b58f-2ad06a280c28.jpg" alt=""
                class="bottom-banner-img">
            <img src="https://icms-image.slatic.net/images/ims-web/61f748aa-5de1-45fa-a5a7-ec12777271fc.jpg" alt=""
                class="bottom-banner-img">
        </div>

    </div>
</template>
<script >
import CardChannel from '@/components/CardChannel.vue';
import ProductCard from '@/components/ProductCard.vue';
import OfficialProductCard from '@/components/OfficialProductCard.vue'
import Category from '@/components/Category.vue'

export default {
    name: 'HomePage',
    components: {
        CardChannel,
        ProductCard,
        Category,
        OfficialProductCard

    },
    data() {
        return {
            items: [{
                id: 1,
                imgURL: 'https://icms-image.slatic.net/images/ims-web/9d78cd14-05ee-43ba-a360-61f895a70aef.png',
                title: 'LazMall',
                route: '/Home'
            },
            {
                id: 2,
                imgURL: 'https://laz-img-cdn.alicdn.com/images/ims-web/TB12wVshUT1gK0jSZFhXXaAtVXa.png',
                title: 'Vouchers',
                route: '/Home'
            },
            {
                id: 3,
                imgURL: 'https://laz-img-cdn.alicdn.com/images/ims-web/TB11DFthO_1gK0jSZFqXXcpaXXa.png',
                title: 'Top-Ups, Bill&Food',
                route: '/Home'
            },
            {
                id: 4,
                imgURL: 'https://icms-image.slatic.net/images/ims-web/a13d12e1-91d1-4240-b22f-46233a012e89.png',
                title: 'LazBlog',
                route: '/Home'
            },
            {
                id: 5,
                imgURL: 'https://img.alicdn.com/imgextra/i1/O1CN01yvjCS71LsB10MJoJt_!!6000000001354-2-tps-150-150.png',
                title: 'LazPick',
                route: '/Home'
            }],
            banners: [
                {
                    id: 1,
                    imgURL: 'https://icms-image.slatic.net/images/ims-web/22660af4-6bfe-4e06-aa4b-8d7a95050f16.jpg',
                    title: '',
                },
                {
                    id: 2,
                    imgURL: 'https://lzd-img-global.slatic.net/g/icms/images/im…4bb1-bfc0-869603240c15.jpg_2200x2200q90.jpg_.webp',
                    title: '',
                },
                {
                    id: 3,
                    imgURL: 'https://lzd-img-global.slatic.net/g/icms/images/im…4d6d-b0cd-efe0b0f9587c.jpg_2200x2200q90.jpg_.webp',
                    title: '',
                },
                {
                    id: 4,
                    imgURL: 'https://lzd-img-global.slatic.net/g/icms/images/im…462a-b159-3ccb8bf6135c.jpg_2200x2200q90.jpg_.webp',
                    title: '',
                },
                {
                    id: 5,
                    imgURL: 'https://lzd-img-global.slatic.net/g/icms/images/im…4efa-b892-4174a06987e0.jpg_2200x2200q90.jpg_.webp',
                    title: '',
                },
                {
                    id: 6,
                    imgURL: 'https://lzd-img-global.slatic.net/g/icms/images/im…4aed-af39-cdfb45af1d47.jpg_2200x2200q90.jpg_.webp',
                    title: '',
                },
                {
                    id: 7,
                    imgURL: 'https://lzd-img-global.slatic.net/g/icms/images/im…42a1-8f86-ff5b7230a352.jpg_2200x2200q90.jpg_.webp',
                    title: '',
                },
                {
                    id: 8,
                    imgURL: 'https://lzd-img-global.slatic.net/g/icms/images/im…4cd8-a3de-1dd18bb53bdd.jpg_2200x2200q90.jpg_.webp',
                    title: '',
                },

            ],
            products: [
                {
                    "id": 1,
                    "title": "AOQU หม้อหุงข้าว 1.5 ลิตร หม้อหุงข้าว 2 ลิตร 3 ลิตร 4 ลิตร หม้อหุงข้าวอเนกประสงค์ หม้อนึ่ง พร้อมซึ้งนึ่ง หม้อหุงข้าวจิ๋ว หนึ่งหม้อ อเนกประสงค์",
                    "img": "https://lzd-img-global.slatic.net/g/p/4db3290a041d19e3d8ce6a257f280b5d.jpg_400x400q80.jpg_.webp",
                    "price": "290.00",
                    "discount": 3,
                    "discountPrice": "281.00",
                    "rate": 5,
                    "comment": 205

                },
                {
                    "id": 2,
                    "title": "(250 กรัม) ส่งฟรี!! ธัญพืช ผัก ผลไม้อบกรอบ ฟิสไดท์ 10 ชนิด ผักอบกรอบ ผักและผลไม้รวมอบแห้ง พร้อมส่งจากไทย (เลือกรสชาติ)",
                    "img": "https://lzd-img-global.slatic.net/g/p/d1008e90158722027e436ad91afcd44e.jpg_400x400q80.jpg_.webp",
                    "price": "69.00",
                    "discount": 12,
                    "discountPrice": "61.00",
                    "rate": 5,
                    "comment": 190
                },
                {
                    "id": 3,
                    "title": "YUNTONGHE พัดลมมินิ USB ชาร์จแบบพกพา พัดลมคล้องคอ รูปทรงนักบินอวกาศ เสียงเงียบ ปรับได้ 3 ระดับ 900mAh พัดลมจิ๋ว พลังเทอร์โบ ลมแรง เสียงเงีย",
                    "img": "https://lzd-img-global.slatic.net/g/p/29c92e273c5bb641287c0b2ba7dc65cb.jpg_400x400q80.jpg_.webp",
                    "price": "538.00",
                    "discount": 72,
                    "discountPrice": "148.00",
                    "rate": 5,
                    "comment": 490
                },
                {
                    "id": 4,
                    "title": "[จัดส่งฟรีพร้อมติดตั้ง] SAMSUNG เครื่องซักผ้าฝาหน้า และอบผ้า WD90T604DBE/ST พร้อม AI Control, 9/6 กก.",
                    "img": "https://lzd-img-global.slatic.net/g/p/6d9a0ffa4abd70d77292f8b76c85ace7.jpg_400x400q80.jpg_.webp",
                    "price": "33,490.00",
                    "discount": 53,
                    "discountPrice": "15,706.72",
                    "rate": 5,
                    "comment": 920
                },
                {
                    "id": 5,
                    "title": "หม้อชาบู ลายเป็ด ขนาด1.8ลิตร ขนาดกะทัดรัด หม้อชาบูเคลือบเทปล่อน ผัดได้ ต้มได้ กระทะมินิ เตาไฟฟ้า Bunnyshop889",
                    "img": "https://lzd-img-global.slatic.net/g/p/e2a61107f3d23147db2daf29ee79cc9a.jpg_400x400q80.jpg_.webp",
                    "price": "239.00",
                    "discount": 57,
                    "discountPrice": "102.46",
                    "rate": 5,
                    "comment": 99
                },
                {
                    "id": 6,
                    "title": "ผ้ากันเปื้อน PVC กันน้ํามัน กันน้ํา เหมาะกับใส่ทํางาน ห้องครัว สําหรับผู้ชาย และผู้หญิง",
                    "img": "https://lzd-img-global.slatic.net/g/p/c5fb42176fe6e3b3c709533d98cf8932.jpg_400x400q80.jpg_.webp",
                    "price": "129.00",
                    "discount": 72,
                    "discountPrice": "36.00",
                    "rate": 5,
                    "comment": 876
                }
            ],
            categories: [
                {
                    "id": 1,
                    "name": "Aprons",
                    "img": "https://lzd-img-global.slatic.net/g/p/d567b03bfd55689d94ecd15d6ecc4ee5.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 2,
                    "name": "Washing Machine",
                    "img": "https://lzd-img-global.slatic.net/g/p/622f8bd70c0cb00b4d63b4afacab10b8.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 3,
                    "name": "Suki Pots",
                    "img": "https://lzd-img-global.slatic.net/g/p/8327e9bfde1e2bff83cd87d0605becc3.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 4,
                    "name": "Desk Fans",
                    "img": "https://lzd-img-global.slatic.net/g/p/29d1ecbcfd206e10eb8e1470f4c6d29e.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 5,
                    "name": "Rice Cookers",
                    "img": "https://lzd-img-global.slatic.net/g/p/b24e6decb605e0fadd5d44cc665b621d.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 6,
                    "name": "Fruit & Vegetable Chips",
                    "img": "https://lzd-img-global.slatic.net/g/p/c7400983c88a735bdada83f00b400858.png_170x170q80.jpg_.webp"
                },
                {
                    "id": 7,
                    "name": "Outdoor Lightning",
                    "img": "https://lzd-img-global.slatic.net/g/p/a529b419c2a0ae3ce4a95985d064ea11.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 8,
                    "name": "Mobiles",
                    "img": "https://lzd-img-global.slatic.net/g/p/3ecd5bc6498b7194818428f5d58fc9f6.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 9,
                    "name": "Storage Bins & Basket",
                    "img": "https://lzd-img-global.slatic.net/g/p/19fa31afc83b661746366d835fd7677f.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 10,
                    "name": "Electrical Circuitry & Parts",
                    "img": "https://lzd-img-global.slatic.net/g/p/0b8e8db6113b2b46d52fe8bcc34d0870.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 11,
                    "name": "LED Bulbs",
                    "img": "https://lzd-img-global.slatic.net/g/p/1ec52ad70484c471043612bd6a61278b.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 12,
                    "name": "Beds",
                    "img": "https://lzd-img-global.slatic.net/g/p/33e6dd949f4db27f5356a17851ba99a3.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 13,
                    "name": "Stand Fans",
                    "img": "https://lzd-img-global.slatic.net/g/p/1e0ca37e2b0e95a378cbdec73520ebef.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 14,
                    "name": "Air Coolers",
                    "img": "https://lzd-img-global.slatic.net/g/p/70127802dbba27f2e3d5027613293ae3.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 15,
                    "name": "Mini/Hand-Held Fans",
                    "img": "https://lzd-img-global.slatic.net/g/p/61bcd737a02094b388781eef5916e5ee.jpg_170x170q80.jpg_.webp"
                },
                {
                    "id": 16,
                    "name": "Plant, Seed and Bulbs",
                    "img": "https://lzd-img-global.slatic.net/g/p/96295d065f0d837d6fc563b5dc75b4b1.png_170x170q80.jpg_.webp"
                }
            ]
        }
    }
}
</script>

<style scoped>
.slide-banner {
    width: 100%;
    height: fit-content;

    @media screen and (min-width: 768px) {
        height: fit-content;
    }
}

.loadmore {
    text-align: center;
    margin: 2em auto;
    display: block;
    width: 50%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #1a9cb8;
    border: 1px solid #1a9cb8;
    text-transform: uppercase;
    cursor: pointer;
}

.banner {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
}

.bottom-banner-img {
    width: calc((100%/3) - 0.5em);
}

.bottom-banner {
    justify-content: space-between
}

.product-official,
.product-item {
    width: calc((100%/3) - 0.5em);
    margin: 0 0.2em;

    @media screen and (min-width: 768px) {
        width: calc((100%/6) - 0.5em);
    }
}

.categories-wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.shop-mall-button {
    display: flex;
    align-items: center;
}

.category-item {
    width: calc(100%/4);

    @media screen and (min-width: 768px) {
        width: calc(100%/8);
    }
}

.content-header,
.left {
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.left {

    flex-wrap: wrap;


}

.wrap-time {
    display: flex;
    align-items: center;
}

.shop-button {
    font-weight: 500;
    font-size: 10px;
    border: 1px solid #f57224;
    border-radius: 2px;
    color: #f57224;
    height: 30px;
    background-color: transparent;
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;
    margin-right: 11px;

    @media screen and (min-width: 768px) {
        font-size: 14px;
        padding-left: 10px;
        padding-right: 10px;
        height: 35px;
    }

}


.flashsale-time {

    @media screen and (min-width: 768px) {
        margin-left: 60px
    }
}

.flashsale,
.LazMall,
.just-for-you,
.categories {
    padding-top: 24px
}

.product-wrap {
    justify-content: space-between;
    flex-wrap: wrap;
}

.time-card {
    border-radius: 2px;
    font-weight: 500;

    font-size: 16px;
    color: #fff;
    background-color: #d3232a;
    text-align: center;




    @media screen and (min-width: 768px) {
        width: 40px;
        height: 35px;
        margin: 12px 6px;
        line-height: 35px;
    }
}

.lazmall-header {
    justify-content: space-between;
    align-items: center;
}



.card-channel-wrap {
    margin-top: 15px;
    flex-flow: wrap;
    row-gap: 1rem;
    column-gap: 1rem;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
        flex-flow: nowrap;
    }
}

.card-channel {
    flex: 1;
    padding: 2rem;
    width: calc((100% / 5) - 1em);

}

.content-top {
    font-weight: 500;
    font-size: 14px;
    color: #f57224;
}

.flashsale-title {
    text-align: start;
    font-size: 22px;
    color: #424242;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>