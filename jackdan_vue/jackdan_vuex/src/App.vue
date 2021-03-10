<template>
  <div class="waterfall-wrapper">
    <ul class="left-waterfall" ref="left">
      <li
        class="item"
        v-for="(item, leftIndex) in leftItems"
        :key="leftIndex"
      >
        <div class="commodity-img" @click="goTogoodDetail(item)">
          <img :src="item.cover" alt="" />
        </div>
        <div class="commodity-title">{{ item.title }}</div>
        <div class="commodity-tetx">销量{{ item.sales }}</div>
        <div class="two-two-div-text">
          <span class="two-two-one-div">
            <span class="two-two-now-dollar">¥</span>
            <span class="two-two-now-price">{{ item.price }}</span>
          </span>
          <span
            class="two-two-old-price"
            v-show="item.scribing && parseInt(item.scribing) != 0"
            >¥{{ item.scribing }}</span
          >
        </div>
        <div
          class="chosse-specification-btn"
          v-show="status == 1"
          @click.stop="shopSpecificationShow(item)"
        >
          购买
        </div>
        <div class="commodity-btn-div" v-if="!takeReset && status == 0">
          <div
            class="chosse-specification-btn"
            v-show="
              (item.shop_goods_sku
                ? item.shop_goods_sku.length > 1
                : 'fasle') && (sukinfo[item.id] ? sukinfo[item.id].num : 0) == 0
            "
            @click.stop="shopSpecificationShow(item)"
          >
            选规格
          </div>
        </div>
      </li>
    </ul>
    <ul class="right-waterfall" ref="right">
      <li
        class="item"
        v-for="(item, rightIndex) in rightItems"
        :key="rightIndex"
      >
        <div class="commodity-img" @click="goTogoodDetail(item)">
          <img :src="item.cover" alt="" />
        </div>
        <div class="commodity-title">{{ item.title }}</div>
        <div class="commodity-tetx">销量{{ item.sales }}</div>
        <div class="two-two-div-text">
          <span class="two-two-one-div">
            <span class="two-two-now-dollar">¥</span>
            <span class="two-two-now-price">{{ item.price }}</span>
          </span>
          <span
            class="two-two-old-price"
            v-show="item.scribing && parseInt(item.scribing) != 0"
            >¥{{ item.scribing }}</span
          >
        </div>
        <div
          class="chosse-specification-btn"
          v-show="status == 1"
          @click.stop="shopSpecificationShow(item)"
        >
          购买
        </div>
        <div class="commodity-btn-div" v-if="!takeReset && status == 0">
          <div
            class="chosse-specification-btn"
            v-show="
              (item.shop_goods_sku
                ? item.shop_goods_sku.length > 1
                : 'fasle') && (sukinfo[item.id] ? sukinfo[item.id].num : 0) == 0
            "
            @click.stop="shopSpecificationShow(item)"
          >
            选规格
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodlist: [
        {
          id: 59,
          shop_id: 91,
          title:
            "TCL\u7535\u89c6 TCL\u7535\u89c6 TCL\u7535\u89c6 TCL\u7535\u89c6 TCL\u7535\u89c6 TCL\u7535\u89c6 TCL\u7535\u89c6 TCL\u7535\u89c6",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u7535\u89c6\u673a",
          detail_describe: "\u4e00\u53ea\u7535\u89c6\u673a500",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 18050,
          sales: 0,
          shop_goods_sku: [
            {
              id: 32,
              goods_id: 59,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["15\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 33,
              goods_id: 59,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["20\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 59,
            attribute: [
              {
                key: "\u5c3a\u5bf8",
                values: [
                  {
                    name: "15\u5bf8",
                  },
                  {
                    name: "20\u5bf8",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 60,
          shop_id: 91,
          title: "TCL\u7535\u89c6 11111111111 123121",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u7535\u89c6\u673a",
          detail_describe: "\u4e00\u53ea\u7535\u89c6\u673a500",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 18010,
          sales: 0,
          shop_goods_sku: [
            {
              id: 34,
              goods_id: 60,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["15\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 35,
              goods_id: 60,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["20\u5bf8"],
              },
              stock: 8985,
              price: "800.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 60,
            attribute: [
              {
                key: "\u5c3a\u5bf8",
                values: [
                  {
                    name: "15\u5bf8",
                  },
                  {
                    name: "20\u5bf8",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 61,
          shop_id: 91,
          title: "SONY\u7535\u89c6",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u7535\u89c6\u673a",
          detail_describe: "\u4e00\u53ea\u7535\u89c6\u673a500",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 18050,
          sales: 0,
          shop_goods_sku: [
            {
              id: 36,
              goods_id: 61,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["15\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 37,
              goods_id: 61,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["20\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 61,
            attribute: [
              {
                key: "\u5c3a\u5bf8",
                values: [
                  {
                    name: "15\u5bf8",
                  },
                  {
                    name: "20\u5bf8",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 62,
          shop_id: 91,
          title: "\u667a\u80fd\u7535\u89c6",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u7535\u89c6\u673a",
          detail_describe: "\u4e00\u53ea\u7535\u89c6\u673a500",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 18050,
          sales: 0,
          shop_goods_sku: [
            {
              id: 38,
              goods_id: 62,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["15\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 39,
              goods_id: 62,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["20\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 62,
            attribute: [
              {
                key: "\u5c3a\u5bf8",
                values: [
                  {
                    name: "15\u5bf8",
                  },
                  {
                    name: "20\u5bf8",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 63,
          shop_id: 91,
          title: "\u66f2\u9762\u7535\u89c6",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u7535\u89c6\u673a",
          detail_describe: "\u4e00\u53ea\u7535\u89c6\u673a500",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 18050,
          sales: 0,
          shop_goods_sku: [
            {
              id: 40,
              goods_id: 63,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["15\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 41,
              goods_id: 63,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["20\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 63,
            attribute: [
              {
                key: "\u5c3a\u5bf8",
                values: [
                  {
                    name: "15\u5bf8",
                  },
                  {
                    name: "20\u5bf8",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 64,
          shop_id: 91,
          title: "\u534e\u4e3a\u624b\u673a",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u624b\u673a",
          detail_describe: "\u4e00\u53ea\u624b\u673a5000",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 36100,
          sales: 0,
          shop_goods_sku: [
            {
              id: 42,
              goods_id: 64,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["8g", "128g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 43,
              goods_id: 64,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["8g", "256g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 44,
              goods_id: 64,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["16g", "128g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 45,
              goods_id: 64,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["16g", "256g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 64,
            attribute: [
              {
                key: "\u5185\u5b58",
                values: [
                  {
                    name: "8g",
                  },
                  {
                    name: "16g",
                  },
                ],
              },
              {
                key: "\u786c\u76d8",
                values: [
                  {
                    name: "128g",
                  },
                  {
                    name: "256g",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 65,
          shop_id: 91,
          title: "\u5c0f\u7c73\u624b\u673a",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u624b\u673a",
          detail_describe: "\u4e00\u53ea\u624b\u673a5000",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 36100,
          sales: 0,
          shop_goods_sku: [
            {
              id: 46,
              goods_id: 65,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["8g", "128g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 47,
              goods_id: 65,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["8g", "256g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 48,
              goods_id: 65,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["16g", "128g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 49,
              goods_id: 65,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["16g", "256g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 65,
            attribute: [
              {
                key: "\u5185\u5b58",
                values: [
                  {
                    name: "8g",
                  },
                  {
                    name: "16g",
                  },
                ],
              },
              {
                key: "\u786c\u76d8",
                values: [
                  {
                    name: "128g",
                  },
                  {
                    name: "256g",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 66,
          shop_id: 91,
          title: "oppo\u624b\u673a",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u624b\u673a",
          detail_describe: "\u4e00\u53ea\u624b\u673a5000",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 36100,
          sales: 0,
          shop_goods_sku: [
            {
              id: 50,
              goods_id: 66,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["8g", "128g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 51,
              goods_id: 66,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["8g", "256g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 52,
              goods_id: 66,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["16g", "128g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 53,
              goods_id: 66,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["16g", "256g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 66,
            attribute: [
              {
                key: "\u5185\u5b58",
                values: [
                  {
                    name: "8g",
                  },
                  {
                    name: "16g",
                  },
                ],
              },
              {
                key: "\u786c\u76d8",
                values: [
                  {
                    name: "128g",
                  },
                  {
                    name: "256g",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 59,
          shop_id: 91,
          title: "TCL\u7535\u89c6",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u7535\u89c6\u673a",
          detail_describe: "\u4e00\u53ea\u7535\u89c6\u673a500",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 18050,
          sales: 0,
          shop_goods_sku: [
            {
              id: 32,
              goods_id: 59,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["15\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 33,
              goods_id: 59,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["20\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 59,
            attribute: [
              {
                key: "\u5c3a\u5bf8",
                values: [
                  {
                    name: "15\u5bf8",
                  },
                  {
                    name: "20\u5bf8",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 60,
          shop_id: 91,
          title: "TCL\u7535\u89c6",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u7535\u89c6\u673a",
          detail_describe: "\u4e00\u53ea\u7535\u89c6\u673a500",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 18010,
          sales: 0,
          shop_goods_sku: [
            {
              id: 34,
              goods_id: 60,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["15\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 35,
              goods_id: 60,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["20\u5bf8"],
              },
              stock: 8985,
              price: "800.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 60,
            attribute: [
              {
                key: "\u5c3a\u5bf8",
                values: [
                  {
                    name: "15\u5bf8",
                  },
                  {
                    name: "20\u5bf8",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 61,
          shop_id: 91,
          title: "SONY\u7535\u89c6",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u7535\u89c6\u673a",
          detail_describe: "\u4e00\u53ea\u7535\u89c6\u673a500",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 18050,
          sales: 0,
          shop_goods_sku: [
            {
              id: 36,
              goods_id: 61,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["15\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 37,
              goods_id: 61,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["20\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 61,
            attribute: [
              {
                key: "\u5c3a\u5bf8",
                values: [
                  {
                    name: "15\u5bf8",
                  },
                  {
                    name: "20\u5bf8",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 62,
          shop_id: 91,
          title: "\u667a\u80fd\u7535\u89c6",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u7535\u89c6\u673a",
          detail_describe: "\u4e00\u53ea\u7535\u89c6\u673a500",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 18050,
          sales: 0,
          shop_goods_sku: [
            {
              id: 38,
              goods_id: 62,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["15\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 39,
              goods_id: 62,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["20\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 62,
            attribute: [
              {
                key: "\u5c3a\u5bf8",
                values: [
                  {
                    name: "15\u5bf8",
                  },
                  {
                    name: "20\u5bf8",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 63,
          shop_id: 91,
          title: "\u66f2\u9762\u7535\u89c6",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u7535\u89c6\u673a",
          detail_describe: "\u4e00\u53ea\u7535\u89c6\u673a500",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 18050,
          sales: 0,
          shop_goods_sku: [
            {
              id: 40,
              goods_id: 63,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["15\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 41,
              goods_id: 63,
              goods_sku: {
                key: ["\u5c3a\u5bf8"],
                value: ["20\u5bf8"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 63,
            attribute: [
              {
                key: "\u5c3a\u5bf8",
                values: [
                  {
                    name: "15\u5bf8",
                  },
                  {
                    name: "20\u5bf8",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 64,
          shop_id: 91,
          title: "\u534e\u4e3a\u624b\u673a",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u624b\u673a",
          detail_describe: "\u4e00\u53ea\u624b\u673a5000",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 36100,
          sales: 0,
          shop_goods_sku: [
            {
              id: 42,
              goods_id: 64,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["8g", "128g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 43,
              goods_id: 64,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["8g", "256g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 44,
              goods_id: 64,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["16g", "128g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 45,
              goods_id: 64,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["16g", "256g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 64,
            attribute: [
              {
                key: "\u5185\u5b58",
                values: [
                  {
                    name: "8g",
                  },
                  {
                    name: "16g",
                  },
                ],
              },
              {
                key: "\u786c\u76d8",
                values: [
                  {
                    name: "128g",
                  },
                  {
                    name: "256g",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 65,
          shop_id: 91,
          title: "\u5c0f\u7c73\u624b\u673a",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u624b\u673a",
          detail_describe: "\u4e00\u53ea\u624b\u673a5000",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 36100,
          sales: 0,
          shop_goods_sku: [
            {
              id: 46,
              goods_id: 65,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["8g", "128g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 47,
              goods_id: 65,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["8g", "256g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 48,
              goods_id: 65,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["16g", "128g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 49,
              goods_id: 65,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["16g", "256g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 65,
            attribute: [
              {
                key: "\u5185\u5b58",
                values: [
                  {
                    name: "8g",
                  },
                  {
                    name: "16g",
                  },
                ],
              },
              {
                key: "\u786c\u76d8",
                values: [
                  {
                    name: "128g",
                  },
                  {
                    name: "256g",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
        {
          id: 66,
          shop_id: 91,
          title: "oppo\u624b\u673a",
          unit: "\u53ea",
          describe: "\u8fd9\u662f\u6d4b\u8bd5\u624b\u673a",
          detail_describe: "\u4e00\u53ea\u624b\u673a5000",
          cover:
            "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
          price: "500.00",
          scribing: "499.00",
          stock: 36100,
          sales: 0,
          shop_goods_sku: [
            {
              id: 50,
              goods_id: 66,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["8g", "128g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 51,
              goods_id: 66,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["8g", "256g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 52,
              goods_id: 66,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["16g", "128g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
            {
              id: 53,
              goods_id: 66,
              goods_sku: {
                key: ["\u5185\u5b58", "\u786c\u76d8"],
                value: ["16g", "256g"],
              },
              stock: 9025,
              price: "500.00",
              scribing: "499.00",
            },
          ],
          get_goods_details: {
            goods_id: 66,
            attribute: [
              {
                key: "\u5185\u5b58",
                values: [
                  {
                    name: "8g",
                  },
                  {
                    name: "16g",
                  },
                ],
              },
              {
                key: "\u786c\u76d8",
                values: [
                  {
                    name: "128g",
                  },
                  {
                    name: "256g",
                  },
                ],
              },
            ],
            pics: [
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
              "http://goods-qiniu.shall-buy.com/goods-20210208090222719032.jpg",
            ],
          },
        },
      ],
      leftItems: [],
      rightItems: [],
    };
  },
  mounted() {
    this.updateWaterfall();
  },
  methods: {
    updateWaterfall() {
      const leftHeight = this.$refs.left.clientHeight;
      const rightHeight = this.$refs.right.clientHeight;
      let item = this.foodlist.shift();
      if (item == null) {
        return;
      }
      if (leftHeight <= rightHeight) {
        this.leftItems.push(item);
      } else {
        this.rightItems.push(item);
      }
      this.$nextTick(function () {
        this.updateWaterfall();
      });
    },
  }
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}

html,
body {
  padding: 0;
  margin: 0;
}

.waterfall-wrapper {
  width: 100%;
}
ul {
  width: 49%;
  list-style-type: none;
}

ul.left-waterfall {
  float: left;
}

ul.right-waterfall {
  float: right;
}

li.item {
  width: 100%;
  margin-bottom: 10px;
  vertical-align: top;
  background-color: #ffffff;
  position: relative;
  border-radius: 6px;
  border: 1px solid;
  margin-bottom: 6px;
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.03);
  .commodity-img {
    width: 100%;
    height: 171px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .commodity-title {
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    max-width: 151px;
    font-size: 17px;
    font-weight: 600;
    color: #333333;
    line-height: 24px;
    margin: 10px 0 6px 10px;
  }

  .commodity-tetx {
    height: 16px;
    font-size: 11px;
    font-weight: 400;
    color: #999999;
    line-height: 16px;
    margin: 0 0 6px 10px;
  }

  .two-two-div-text {
    max-width: 80px;
    margin: 0 0 16px 10px;
    font-size: 0;

    .two-two-one-div {
      width: 100%;
      white-space: nowrap;
    }

    .two-two-now-dollar,
    .two-two-now-price {
      font-size: 12px;
      font-weight: 400;
      color: #f9591b;
      line-height: 17px;
      display: inline-block;
    }

    .two-two-now-price {
      font-size: 18px;
      margin-right: 2px;
    }

    .two-two-old-price {
      display: inline-block;
      text-decoration: line-through;
      height: 14px;
      font-size: 10px;
      font-weight: 400;
      color: #999999;
      line-height: 14px;
    }
  }

  .commodity-btn-div {
    position: absolute;
    right: 0;
    bottom: 9px;
    flex: 1;
    height: 33px;
    margin-top: 40px;
    text-align: right;

    .chosse-minus-btn,
    .cartgoodsnum-div,
    .chosse-add-btn {
      display: inline-block;
      vertical-align: top;
      width: 33px;
      height: 33px;
      padding: 0;
      line-height: 33px;
      background: transparent;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .cartgoodsnum-div {
      width: 8px;
      //   margin-left: 6px;
      width: 8px;
      height: 18px;
      font-size: 13px;
      font-weight: 400;
      color: #333333;
      line-height: 18px;
      padding: 8px 0px 0 4px;
    }

    .chosse-minus-btn {
      width: 22px;
      height: 22px;
      padding: 5px 0 0 0;
    }
  }
}
</style>
