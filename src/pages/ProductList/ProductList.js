import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ListContext } from "../../context/ListContext";
import { useSearchParams, useLocation } from "react-router-dom";
import { api } from "../../config";
import AdsContainer from "./ListComponents/AdsContainer";
import Content from "./ListComponents/Content";
import Nav from "./ListComponents/Nav";
import * as S from "./styled.ProductList";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const token = localStorage.getItem("token");

  const [hasMore, sethasMore] = useState(true);
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);

  const location = useLocation();
  const keyword = searchParams.get("keyword");

  const clickSubCategory = (e, categoryId) => {
    let url = "";

    if (categoryId === 1) {
      subCatLst[0] = [
        {
          name: FILTER[categoryId - 1].filterEngName,
          id: e.target.id,
        },
      ];
    }
    if (categoryId === 2) {
      subCatLst[1] = [
        {
          name: FILTER[categoryId - 1].filterEngName,
          id: e.target.id,
        },
      ];
    }
    if (categoryId === 3) {
      subCatLst[2] = [
        {
          name: FILTER[categoryId - 1].filterEngName,
          id: e.target.id,
        },
      ];
    }

    for (let i = 0; i < 3; i++) {
      url +=
        subCatLst[i].length > 0
          ? `&${subCatLst[i][0].name}=${subCatLst[i][0].id}`
          : "";
    }

    fetch(`${api.products}/sort?offset=0&limit=16${url}`)
      .then(res => res.json())
      .then(result => setProducts(result.data));
  };

  const fetchProducts = async () => {
    const res = await fetch(`${api.products}/sort?offset=${offset}&limit=16`);
    const productList = await res.json();
    return productList.data;
  };

  const fetchData = async () => {
    const productList = await fetchProducts();
    setProducts([...products, ...productList]);
    setOffset(offset => (offset += 16));
  };

  useEffect(() => {
    let url = `${api.products}/sort?offset=0&limit=16`;
    url = keyword ? url + `&keyword=${keyword}` : url;

    if (!token) {
      (async () => {
        try {
          const res = await fetch(url, {
            method: "GET",
          });
          const result = await res.json();
          setProducts(result.data);
          setOffset(offset => (offset += 16));
        } catch (err) {
          alert(err);
        }
      })();
    } else {
      (async () => {
        try {
          const res = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: token,
            },
          });
          const result = await res.json();
          setProducts(result.data);
          setOffset(offset => (offset += 16));
        } catch (err) {
          alert(err);
        }
      })();
    }
  }, []);

  return (
    <ListContext.Provider
      value={{ FILTER, clickSubCategory, products, setProducts }}
    >
      <S.List>
        <Nav keyword={keyword} />
        <AdsContainer />
        <InfiniteScroll
          dataLength={products.length}
          next={fetchData}
          hasMore={hasMore}
        >
          <div className="container">
            <div>
              <Content location={location} />
            </div>
          </div>
        </InfiniteScroll>
      </S.List>
    </ListContext.Provider>
  );
};

export default ProductList;

const FILTER = [
  {
    categoryId: 1,
    filter: "카테고리",
    filterEngName: "category",
    subCategories: [
      { subCategoryId: 1, subCategory: "신발" },
      { subCategoryId: 2, subCategory: "의류" },
      { subCategoryId: 3, subCategory: "패션잡화" },
      { subCategoryId: 4, subCategory: "라이프" },
      { subCategoryId: 5, subCategory: "테크" },
    ],
  },
  {
    categoryId: 2,
    filter: "브랜드",
    filterEngName: "brand",
    subCategories: [
      { subCategoryId: 1, subCategory: "pineapple" },
      { subCategoryId: 2, subCategory: "Wecode Studio" },
      { subCategoryId: 3, subCategory: "Wermes" },
      { subCategoryId: 4, subCategory: "Github Island" },
      { subCategoryId: 5, subCategory: "Another Error" },
    ],
  },
  {
    categoryId: 3,
    filter: "성별",
    filterEngName: "gender",
    subCategories: [
      { subCategoryId: 1, subCategory: "남성" },
      { subCategoryId: 2, subCategory: "여성" },
      { subCategoryId: 3, subCategory: "공통" },
    ],
  },
];

let category1 = [];
let category2 = [];
let category3 = [];
const subCatLst = [category1, category2, category3];
