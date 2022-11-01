import styled from "styled-components";

const S = {
  CarouselContainer: styled.div`
    margin-bottom: 50px;
  `,

  swiperImg: styled.img`
    width: 100%;
    height: 480px;
    border: none;
  `,
  JustDroppedContainer: styled.div`
    margin-top: 50px;
  `,
  MainJustDropText: styled.p`
    max-width: 1200px;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 700;
  `,
  MainJustDropKorText: styled.p`
    max-width: 1200px;
    margin: 0 auto;
    color: #22222280;
    font-size: 14px;
  `,
  ItemComponentContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 300px);
    max-width: 1200px;
    margin: auto;
  `,
  MainStylePick: styled.p`
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 30px;
    font-size: 24px;
    font-weight: 700;
  `,
  StylePickContainer: styled.div`
    max-width: 1200px;
    margin: 0 auto;
  `,
  StylePickItem: styled.img`
    width: 185px;
    height: 245px;
    border: none;
    border-radius: 10px;
  `,
  ProfileBackGround: styled.span`
    display: inline-block;
    position: absolute;
    top: 8px;
    left: 5px;
    width: 36px;
    height: 36px;
    background-color: #fff;
    border-radius: 50%;
  `,
  UserProfile: styled.img`
    position: absolute;
    top: 10px;
    left: 7px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  `,
  UserNickname: styled.p`
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: #fff;
    font-size: 13px;
  `,
  GridContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(5, 240px);
    max-width: 1200px;
    margin: 0 auto;
  `,
  CategoryContainer: styled.div`
    margin: 10px;
  `,
  CategoryImg: styled.img`
    width: 220px;
    height: 100px;
    border: none;
    border-radius: 12px;
  `,
  CategoryText: styled.p`
    margin-top: 8px;
    color: #333;
    font-size: 15px;
    text-align: center;
  `,
  ProductContainer: styled.div`
    position: relative;
    width: 280px;
    margin: 20px 0;
    .scrapIcon {
      position: absolute;
      top: 15px;
      right: 10px;
      width: 27px;
      height: 20px;
    }
  `,
  ProductImg: styled.img`
    width: 100%;
    height: 280px;
    border-radius: 12px;
  `,
  ProductBrand: styled.p`
    color: #333;
    font-size: 14px;
    font-weight: 700;
    text-decoration: underline;
  `,
  ProductName: styled.p`
    margin: 8.5px 0 7px 0;
    color: #222;
    font-size: 14px;
  `,
  ProductPrice: styled.p`
    color: #222;
    font-size: 15px;
  `,
  ProductBuyImmediately: styled.p`
    color: #22222280;
    font-size: 11px;
  `,
};

export default S;
