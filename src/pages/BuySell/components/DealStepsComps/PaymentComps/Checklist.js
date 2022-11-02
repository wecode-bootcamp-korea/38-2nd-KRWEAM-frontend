import React from "react";
import * as S from "../styled.Payment";

const Checklist = ({ state, setIsFullfilled }) => {
  const checklist = state ? BUY_CHECKLIST : SELL_CHECKLIST;
  const clicked = [];

  const clickCheckBox = e => {
    clicked.push(e.currentTarget.value);
    activateBtn();
  };

  const activateBtn = () => {
    clicked.length === checklist.length && setIsFullfilled(false);
  };

  return (
    <S.Container>
      {checklist.map(({ id, description, subDescription }) => {
        return (
          <S.ListItem key={id}>
            <S.TextArea>
              <S.CheckDes>{description}</S.CheckDes>
              <br />
              <S.CheckSubDes>{subDescription}</S.CheckSubDes>
            </S.TextArea>
            <S.RadioInput onClick={clickCheckBox} />
          </S.ListItem>
        );
      })}
    </S.Container>
  );
};

export default Checklist;

const BUY_CHECKLIST = [
  {
    id: 1,
    description:
      "빠른 배송 구매는 보관판매 상품으로 결제 즉시 출고를 준비합니다.",
    subDescription:
      "판매자의 보관 판매 상품으로 이미 검수 합격한 상품입니다. 결제 즉시 출고를 준비합니다.",
  },
  {
    id: 2,
    description:
      "창고 보관을 선택한 경우, 구매자에게 배송되지 않고 KREAM 창고에 보관됩니다.",
    subDescription:
      "보관이 완료되면 창고 이용료(현재 첫 30일 무료)가 결제됩니다.",
  },
  {
    id: 3,
    description:
      "`결제하기`를 선택하시면 즉시 결제가 진행되며, 단순 변심이나 실수에 의한 취소가 불가능합니다.",
    subDescription:
      "본 거래는 개인간 거래로 전자상거래법(제17조)에 따른 청약철회(환불, 교환) 규정이 적용되지 않습니다.",
  },
  {
    id: 4,
    description: "구매 조건을 모두 확인하였으며, 거래 진행에 동의합니다.",
  },
];

const SELL_CHECKLIST = [
  {
    id: 1,
    description:
      "거래가 체결되면 48시간 내에 발송 후, 발송 정보를 입력해야합니다.",
    subDescription:
      "착불 배송 시에 판매 금액에서 차감 정산하며, 미정산시 별도 고지 없이 해당 금액을 결제 시도할 수 있습니다.",
  },
  {
    id: 2,
    description:
      "송장 번호 미기재·오입력 시 입고가 진행되지 않으며, 발송 후 5일(일요일·공휴일 제외) 내 미도착은 허위 정보 입력으로 간주하여 미입고 페널티를 부과합니다.",
    subDescription:
      "거래 진행 상태 알림을 받을 수 없음으로 인한 거래 실패는 판매자의 책임입니다.",
  },
  {
    id: 3,
    description: "검수 기준과 페널티 및 이용 정책을 다시 한번 확인하였습니다.",
    subDescription:
      "이용 정책 위반 시, 판매 금액의 최대 15.0%의 페널티가 부과됩니다.",
  },
  {
    id: 4,
    description:
      "바로 판매하기를 선택하시면 즉시 거래가 체결되며, 단순 변심이나 실수에 의한 취소가 불과합니다.",
  },
  {
    id: 5,
    description: "판매 조건을 모두 확인하였으며, 거래 진행에 동의합니다.",
  },
];
