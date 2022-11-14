import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 营销卡片渲染数据
 */
interface IDirectVoucher {
  /** 品牌名 */
  brandName?: string;
  /** 品牌logo */
  brandLogo?: string;
  /** 距离描述 */
  distanceDesc?: string;
  /** 活动素材图 */
  campImage?: string;
  /** 营销标签 */
  promoLogo?: string | string[];
  /** 券描述 */
  voucherDesc?: string;
  /** 券 */
  benefitAmount?: string;
  /** 特价券原价 */
  oriPriceAmount?: string;
  /** 折扣描述 */
  discountDesc?: string;
  /** 库存 */
  voucherStockNum?: string;
}

const cardDataList: IDirectVoucher[] = [
  {
    brandName: '弄堂里',
    brandLogo:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*anNdQqA_I_AAAAAAAAAAAAAAARQnAQ',
    distanceDesc: '500m',
    campImage:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*U29sSqgeU-4AAAAAAAAAAAAAARQnAQ',
    promoLogo: [
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*y6CTRo9L2oEAAAAAAAAAAAAAARQnAQ',
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*Q1d4SIoeKRkAAAAAAAAAAAAAARQnAQ',
    ],
    voucherDesc: '弄堂里14元超值优惠券包x2',
    benefitAmount: '1',
    oriPriceAmount: '28',
    discountDesc: '0.6折',
    voucherStockNum: '库存888份',
  },
  {
    brandName: '弄堂里',
    brandLogo:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*anNdQqA_I_AAAAAAAAAAAAAAARQnAQ',
    distanceDesc: '500m',
    campImage:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*U29sSqgeU-4AAAAAAAAAAAAAARQnAQ',
    promoLogo: [
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*Q1d4SIoeKRkAAAAAAAAAAAAAARQnAQ',
    ],
    voucherDesc: '弄堂里14元超值优惠券包x2',
    benefitAmount: '1',
    discountDesc: '0.6折',
  },
  {
    brandName: '飞猪',
    brandLogo:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*dCL5Q4oBaQsAAAAAAAAAAAAAARQnAQ',
    campImage:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*MZ7VSaNZXRYAAAAAAAAAAAAAARQnAQ',
    promoLogo:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*90WEQLmnKdkAAAAAAAAAAAAAARQnAQ',
    voucherDesc: '南方航空20元优惠券',
    benefitAmount: '20',
  },
];

interface ICardProps {
  data: IDirectVoucher;
}

const Card: React.FC<ICardProps> = (props) => {
  const { data } = props;
  return (
    <div className="card">
      <div className="card-left">
        <div className="card-left-title">
          <img src={data.brandLogo} alt="" />
          <div>{data.brandName}</div>
        </div>
      </div>
    </div>
  );
};

const CardList: React.FC<{ list: IDirectVoucher[] }> = (props) => {
  return (
    <>
      {props.list.map((data) => (
        <Card data={data} />
      ))}
    </>
  );
};

ReactDOM.render(<CardList list={cardDataList} />, document.getElementById('app'));
