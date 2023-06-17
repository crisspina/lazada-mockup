<template>
    <div class="footer">
        <div class="footer-first ">
            <div class="customer-care">
                <h3>Customer Care</h3>
                <ul>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Shipping & Delivery</li>
                    <li>International Product Policy</li>
                    <li>How to Return</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div class="lazada-wrap">
                <h3>Lazada</h3>
                <ul>
                    <li>All Categories</li>
                    <li>About Lazada</li>
                    <li>Affiliate Program</li>
                    <li>Careers</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy & Media</li>
                    <li>Press & Media</li>
                    <li>Secutiry</li>
                    <li>Popular Priducts</li>
                    <li>Intellectual Property Protection</li>
                </ul>
            </div>
            <div class="application">
                <div class="lazada-app">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5p6xmaQUVJlNDVysb8M5zajEpaAQrQYWMew&usqp=CAU"
                        alt="" class="lazada-logo">
                    <div>
                        <span class="" style="font-size: 16px; font-weight: 300;color: #f36f36;">Go where you heart
                            beats</span><br>
                        <span style="font-size: 14px; font-weight: 300; color: #0f136d; padding-top: 2px;">Download the
                            App</span>
                    </div>
                </div>

            </div>
        </div>
        <div class="second-footer">
            <div class="second-block">
                <div class="payment-wrap">
                    <h3>Payment Methods</h3>
                    <div class="display-flex">
                        <div v-for="data in paymentMedthod" :key="data.id" class="">
                            <img :src="data.img" :alt="data.name" class="img-payment">
                        </div>
                    </div>
                </div>
                <div class="delivery-wrap ">
                    <h3>Delivery Services</h3>
                    <div class="img-list">
                        <div v-for="item in deliveryServices" :key="item.id" class="delivery-box">
                            <img :src="item.img" alt="" class="img-delivery">
                        </div>
                    </div>
                </div>
                <div class="verified-wrap">
                    <h3>Verified by</h3>
                    <div class="display-flex">
                        <div v-for="item in VerifiedBy" :key="item.id" class="delivery-box">
                            <img :src="item.img" alt="" class="img-verified">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="third-footer ">
            <div class="column-left">
                <div class="column">
                    <div>
                        <h1>Best Shopping Experience Guaranteed at Lazada Thailand Lazada: Redefining “Effortless Shopping”
                        </h1>
                        <span>As online shopping becoming more prevalent now, Lazada Thai is always striving to keep up with
                            what the consumers want and need. We are making every effort to achieve maximum customer
                            satisfaction through seamless transactions and competitive product pricing. We are updating and
                            improving our product selection at the best prices to delight our customers along with catchy
                            deals, flash sales, and other cool promos.</span>
                        <span>
                            Sporting a new ‘heart’ logo mark that shows the letter “L” as a three-dimensional box, Lazada is
                            committing to providing better and more unique ways to make sure that every transaction is truly
                            effortless. The new tagline ‘Go Where Your Heart Beats’ represents the company’s vision to boost
                            the online shopper and seller experience through commerce and technology. The colorful heart
                            logo is a youthful, energetic look, that symbolizes the vibrancy of shopping and today’s digital
                            age.
                        </span>
                    </div>
                    <div>
                        <h1>EASY SHOPPING</h1>
                        <span>“Effortless shopping” has been our goal throughout the years, promising every customer with
                            nothing but hassle-free, and convenient online shopping experience. We have sorted everything to
                            ease your search through our user-friendly website and App. Products are listed under their
                            respective categories and descriptions as well as reviews are openly provided.

                            With LazMall, you won’t run out of options as we collaborated with hundreds of top brands
                            worldwide. There are more and more renowned sellers joining our community to serve you too.
                            RedMart also offers a vast selection of grocery items at the lowest prices.</span>
                    </div>
                    <div>
                        <h1>MULTIPLE PAYMENT OPTIONS</h1>
                        <span>Transacting with us is easy as we accept multiple modes of payment. Being a leading online
                            marketplace, we feel responsible to give you a safe and secure platform to shop with. Our
                            payment
                            gateway keeps all your sensitive information protected from unauthorized users and any
                            fraudulent
                            activities. You can pay through debit/credit card or cash-on-delivery.</span>
                    </div>

                    <div>
                        <h1>ISLAND-WIDE SHIPPING & FUSS-FREE RETURNS</h1>
                        <span>We not only give you an excellent choice of products but also extend the luxury of nationwide
                            home
                            delivery. We ship anything to your doorsteps anywhere you are on the island. Received a damaged
                            shipment? Send it back through our hassle-free returns policy and we will send a refund as soon
                            as
                            possible.</span>
                    </div>
                    <div>
                        <h1>THE BIGGEST SALES, FRESH VOUCHERS & COOLEST PROMOS</h1>
                        <span>Attractive deals can be purchased on the website daily. Discount codes and multiple vouchers
                            can
                            be redeemed to make the most of your shopping. Scoop up these incredible promo codes especially
                            during our campaign periods including Birthday Sale, Women’s Festival, Mid-Year Festival, 9.9
                            Sale
                            and Lazada’s most anticipated online shopping festivals: 11.11 and 12.12 Sales!</span>
                    </div>
                </div>
            </div>
            <div class="column-right">
                <div class="column">
                    <h1>TOP CATEGORIES & BRANDS</h1>
                    <div class="">
                        <h4>EL</h4>
                        <span>Hisense , Midea , Haier , Canon , DoHome , Microsoft , LG , TCL , Philips , more...</span>
                    </div>
                    <div>
                        <h4>MOTHER & BABY</h4>
                        <span>MamyPoko , BabyLove , Pampers , Huggies , Merries , Enfagrow , S26 , Pediasure , HiQ , D-Nee ,
                            Foremost , more...</span>
                    </div>
                    <div>
                        <h4>HEALTH & BEAUTY</h4>
                        <span>L'Oreal Paris , Unilever , Estee Lauder , Laneige , Dettol , Ensure , La Roche Posay , P&G ,
                            Watsons , Eve and Boy , Bobbi Brown , Kiehl's , Lifree Thailand</span>
                    </div>
                    <div>
                        <h4>HOME & LIVING</h4>
                        <span>Index Livingmall , SB Design Square , Superlock , Satin , Seagull , FN OUTLET , Lock&Lock ,
                            Philips Lighting Thailand , Bosch , PASAYA , 3M Official Online Store , siamlatex , more...
                        </span>
                        <span>Adidas , Under Armour , New Balance , Skechers , Asics , Warrix , Jason , B&G , GrandSport ,
                            Yonex , LULAE , Hydro Flask , more...</span>
                    </div>
                    <div>
                        <h4>MOTORS</h4>
                        <span>3M Auto , Meguiars , KENWOOD , Pioneer , Aston , Caltex , FURiO by Bangchak , Arctic , Super
                            max and tyre , PLATINUM X , Audio Advance , more...
                        </span>
                    </div>
                    <div>
                        <h4>FASHION</h4>
                        <span>Sabina , CONVERSE , Mc Jeans , Topshop , GQ , Wacoal , CALVIN KLEIN , Fitflop , TOMS , Thai
                            Designer Club , Keds , Guess , Crocs , more...</span>
                    </div>
                    <div>
                        <h4>SHOP WORLDWIDE WITH ALIEXPRESS</h4>
                        <span>Russia , Spain , France , Germany , Poland , Brazil , Saudi Arabia</span>
                    </div>
                    <div>
                        <h4>SHOP WORLDWIDE WITH DARAZ</h4>
                        <span>Pakistan , Bangladesh , Sri Lanka , Myanmar , Nepal</span>
                    </div>
                    <div>
                        <h4>TOY & GAMES</h4>
                        <span>hasbro , Lego , Barbie , Mattel , Fisher Price , Crayola , Playmobil , KCtoys , Kiddo Pacific
                            Co.,Ltd. , Cyberdict Technology , Joan Miro Thailand , more...</span>
                    </div>
                    <div>
                        <h4>GROCERIES</h4>
                        <span>Unilever , Pepsico , Osotspa , Nescafe Dolce Gusto , Nescafe , MIlo , KAO , Lion , Cellox Zilk
                            and Maxmo , DoiTung , more...</span>
                    </div>
                    <div>
                        <h4>MOBILES & TABLETS DEVICES</h4>
                        <span>Xiaomi , Realme , OPPO , vivo , OnePlus , Infinix , Apple , Samsung , Huawei , more...
                        </span>
                    </div>
                    <div>
                        <h4>PET SUPLLIES</h4>
                        <span>Mars , Nestle Pet , PCG , Hill's , Unicharm Pet , Jerhigh , Bearing , Frontguard , Hana Pet ,
                            more</span>
                    </div>
                    <div>
                        <h4>ACCESSORIES</h4>
                        <span>JBL , Sandisk , WD , Sennheiser , Bose , Anker , Fitbit , Sony , TP-Link , Amazfit ,
                            more...</span>
                    </div>
                    <div>
                        <h4>
                            WATCHES SUNGLASSES JEWELLERY
                        </h4>
                        <span>RayBan , Oakley Official Store , SEIKO , Casio , Citizen Official Store , Timex Official
                            Thailand , Jubilee Diamond , Emporio Armani , DKNY , Swatch Official Store , Tissot Official
                            Store , Mido Official Store , more...</span>
                    </div>
                    <div>
                        <h4>
                            BAGS & TRAVEL
                        </h4>
                        <span>Samsonite , American Tourister , Herschel , Anello , Furla , Coccinelle , Morgan , Timbuk2 ,
                            Guess , Cath Kidston , COACH , Jansport , more...</span>
                    </div>
                    <div>
                        <h4>
                            SPECIAL PROMOTIONS
                        </h4>
                        <span>Free Shipping , Utility Bill , Mid-Month</span>
                    </div>
                    <div>
                        <h4>RECOMMEND PRODUCT</h4>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent',
    components: {
    },
    data() {
        return {
            paymentMedthod: [
                {
                    "id": 1,
                    "img": "https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png",
                    "name": "cash ob develivery"
                },
                {
                    "id": 2,
                    "img": "https://logowik.com/content/uploads/images/857_visa.jpg",
                    "name": "visa"
                }
                ,
                {
                    "id": 3,
                    "img": "https://logowik.com/content/uploads/images/787_mastercard.jpg",
                    "name": "MasterCard"
                },
                {
                    "id": 4,
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/2560px-JCB_logo.svg.png",
                    "name": "JCB"
                }
            ],
            deliveryServices: [
                {
                    "id": 1,
                    "img": "https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01RNizk522j2cPtaRjc_!!6000000007155-2-tps-96-70.png",
                },
                {
                    "id": 2,
                    "img": "https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN013FblIV1u8qO5VGIBd_!!6000000005993-2-tps-96-70.png"
                },
                {
                    "id": 3,
                    "img": "https://lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN019AGufS1l282dNudcg_!!6000000004760-2-tps-96-70.png"
                },
                {
                    "id": 4,
                    "img": "https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01WNUpFq1JZjrZz6erP_!!6000000001043-2-tps-96-70.png"
                },
                {
                    "id": 5,
                    "img": "https://lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN01LppnTD1ducEfzsBBi_!!6000000003796-2-tps-96-70.png"
                },
                {
                    "id": 6,
                    "img": "https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01vin7Ts1FJ0wFlnGyr_!!6000000000465-2-tps-96-70.png"
                },
                {
                    "id": 7,
                    "img": "https://lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN01hdJpbW1OBzP399rh5_!!6000000001668-2-tps-96-70.png"
                },
                {
                    "id": 8,
                    "img": "https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01OXD8L11Utr29wvyRA_!!6000000002576-2-tps-96-70.png"
                },
                {
                    "id": 9,
                    "img": "https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01y24bVy1KtGMTzmi8h_!!6000000001221-2-tps-96-70.png"
                }

            ],
            VerifiedBy: [
                {
                    "id": 1,
                    "img": "https://lzd-img-global.slatic.net/g/tps/tfs/TB1lbmoqYr1gK0jSZR0XXbP8XXa-340-200.png"
                },
                {
                    "id": 2,
                    "img": "https://lzd-img-global.slatic.net/g/tps/tfs/TB1jyJMv.H1gK0jSZSyXXXtlpXa-184-120.png"
                }
            ]

        }
    }
}
</script>

<style>
h1 {
    font-size: 16px;
    color: #606060;
    font-weight: 300;
    line-height: 20px;
    margin: 0 0 5px;
}


.third-footer {
    display: flex;
    flex-direction: column;
    color: rgb(136, 136, 136);
    background-color: rgb(244, 244, 246);
    font-size: 12px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
}

.fourth-footer {
    background-color: #fff;
    color: #606060;
    padding: 40px 0;
    display: flex;
}

.column-left {
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 50%
    }
}

.lazada-logo {
    width: 40px;
    border-radius: 10px;
}


.lazada-app {
    display: flex;
    align-items: center;
    flex-flow: wrap;
    row-gap: 1rem;
    column-gap: 1rem;
    margin-top: 1em;
}


.column-right {
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 50%
    }
}

.column {
    column-count: 2;
}

.img-payment {
    width: 40px;
    padding-left: 0.5rem;

    @media screen and (min-width: 768px) {
        width: 70px;
    }
}

.application {
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 50%;
    }

}


.img-delivery {
    width: 96px;

}

.img-verified {
    width: 96px
}

.delivery-wrap {
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 25%
    }

}

.footer-first {
    display: flex;
    flex-direction: column;
    background-color: #F4F4F6;
    padding: 20px 0;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
}

.second-footer {
    background-color: white;


}



.payment-wrap {
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 50%
    }
}

.verified-wrap {
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 25%
    }
}

.customer-care {
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 25%
    }
}

.lazada-wrap {
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 25%
    }
}

.delivery-box {
    width: calc((100% / 3) - 0.5em);

}

.img-delivery,
.img-verified {
    width: 100%;
    height: 100%;
}

.img-list {

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    @media screen and (min-width: 768px) {
        display: flex;
    }
}

.second-block {
    flex-direction: column;
    padding-bottom: 1em;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }
}
</style>