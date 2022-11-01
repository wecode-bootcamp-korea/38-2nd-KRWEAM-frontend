import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import * as S from "./FooterStyle";

const Footer = () => {
  return (
    <S.FooterAll>
      <S.FooterServiceArea>
        <S.FooterServiceTextContainer>
          {FooterServiceText.map(data => (
            <div key={data.id}>
              <S.FooterServiceTextStrong>
                {data.title}
              </S.FooterServiceTextStrong>
              <ul>
                {data.service.map(data => (
                  <S.FooterText key={data.id}>{data.text} </S.FooterText>
                ))}
              </ul>
            </div>
          ))}
        </S.FooterServiceTextContainer>
        <div>
          <S.FooterServiceTextStrong>
            고객센터 0000-0000
          </S.FooterServiceTextStrong>
          <ul>
            <S.FooterText>
              운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무)
            </S.FooterText>
            <S.FooterText> 점심시간 평일 13:00 - 14:00 </S.FooterText>
            <S.FooterText> 1:1 문의하기는 앱에서만 가능합니다 </S.FooterText>
          </ul>
          <S.FooterServicebtn>자주 묻는 질문</S.FooterServicebtn>
        </div>
      </S.FooterServiceArea>
      <div>
        <S.FooterTermContainer>
          <S.FooterTerm>
            회사소개 인재채용 제휴제안 이용약관
            <S.FooterSelf>개인정보처리방침 </S.FooterSelf>
          </S.FooterTerm>
          <S.FooterIcons>
            <AiOutlineInstagram className="icon" />
            <BsFacebook className="icon" />
            <RiKakaoTalkFill className="icon" />
          </S.FooterIcons>
        </S.FooterTermContainer>
        <S.FooterBusiness>
          krweam 주식회사 · 대표 xxx 사업자등록번호 : 000-00-00000
          사업자정보확인통신판매업 : 제 0000-성남성남C-0000호 사업장소재지 :
          서울특별시 강남구 선릉, 호스팅 서비스 : 위코드
        </S.FooterBusiness>
        <S.FooterNotice>
          <S.FooterNoticeText>
            krweam (수)는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별
            판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다. 단,
            거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.
          </S.FooterNoticeText>
          <S.FooterCopy>© KRWEAM.</S.FooterCopy>
        </S.FooterNotice>
      </div>
    </S.FooterAll>
  );
};
export default Footer;

const FooterServiceText = [
  {
    id: "1",
    title: "이용안내",
    service: [
      { id: "1", text: "검수기준" },
      { id: "2", text: "이용정책" },
      { id: "3", text: "페널티 정책" },
      { id: "4", text: "커뮤니티 가이드라인" },
    ],
  },
  {
    id: "2",
    title: "고객지원",
    service: [
      { id: "1", text: "공지사항" },
      { id: "2", text: "서비스 소개" },
      { id: "3", text: "쇼룸 안내" },
      { id: "4", text: "판매자 방문접수" },
    ],
  },
];
