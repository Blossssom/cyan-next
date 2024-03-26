import React, { useEffect, useState } from "react";
import { getProductItemApi } from "../../_api/index";
import ProductCard from "../card/ProductCard";
import { productPhotoList } from "../../_constance/index";

export default function ReservationItem(props) {
  useEffect(() => {
    console.log(productPhotoList[1]);
    getProductItemData();
  }, []);
  const [productList, setProductList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const getProductItemData = async () => {
    const result = await getProductItemApi();
    const data = await result.json();
    setProductList(data);
  };

  const selectProductHandler = (productInfo) => {
    setSelectedItem(productInfo);
  };
  return (
    <section className="fade-in w-full flex flex-col gap-14 max-w-[1440px]">
      <div className="w-full text-[60px] font-bold leading-tight">
        <p>예약하고 싶은 시안 사진관</p>
        <p>서비스를 선택해주세요</p>
      </div>
      <article className="w-full flex flex-col gap-14">
        <div className="border-t border-[#959595] py-3 flex flex-col gap-4">
          <p className="text-2xl font-bold">이용 가능한 서비스</p>
          <div className="grid grid-cols-4 gap-3">
            {productList?.map((product) => {
              return (
                <ProductCard
                  key={product.photoItemSeq}
                  productInfo={product}
                  image={productPhotoList[product.photoItemSeq]}
                  isSelect={selectedItem?.photoItemSeq === product.photoItemSeq}
                  onSelect={selectProductHandler}
                />
              );
            })}
          </div>
        </div>
        <div className="border-t border-[#959595] py-3 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">예상 금액</p>
            <p className="text-2xl font-bold">{selectedItem?.itemPrice}</p>
          </div>
        </div>
      </article>
      <div className="w-full flex justify-between items-center my-20">
        <button
          onClick={() => props.prevStep()}
          className="rounded-full border-black border py-5 px-10 font-bold"
        >
          이전
        </button>
        <button
          onClick={() => props.nextStep()}
          className="rounded-full border-black border py-5 px-10 font-bold"
        >
          다음
        </button>
      </div>
    </section>
  );
}
