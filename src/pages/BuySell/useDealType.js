export default function useDealType(initialLocation = {}, initialInfo = {}) {
  const state = initialLocation.pathname.includes("buy");
  const dealType = state ? "구매" : "판매";
  const subDealType = !state ? "구매" : "판매";
  const price = !state ? initialInfo.buyPrice : initialInfo.sellPrice;
  const subPrice = state ? initialInfo.buyPrice : initialInfo.sellPrice;
  const shipType = state ? "일반배송" : "선불발송";
  const paymentType = state ? "결제" : "정산";
  const address = state ? "배송" : "반송";
  const endpoint = state ? "buy" : "sell";
  const sell = "바로 판매";

  return {
    state,
    dealType,
    subDealType,
    price,
    subPrice,
    shipType,
    paymentType,
    address,
    sell,
    endpoint,
  };
}
