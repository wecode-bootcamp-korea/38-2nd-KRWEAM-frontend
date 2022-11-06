import React, { useState, useEffect, useContext } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { ListContext } from "../../../context/ListContext";
import * as S from "./style.Accordion";

const Accordion = ({ multiple, clickSubCategory }) => {
  const [active, setActive] = useState();
  const [activeArr, setActiveArr] = useState([]);
  const { FILTER } = useContext(ListContext);

  const state = [...FILTER].map(item => {
    return { filter: item.filter, active: false };
  });

  const handleClick = filter => {
    setActive(filter === active ? null : filter);
    if (multiple) {
      let index = activeArr.findIndex(item => item.filter === filter);
      let update = [...activeArr];
      update[index].active = !update[index].active;
      setActiveArr(update);
    }
  };

  const checkOnlyOne = (e, categoryId) => {
    const target = e.target;

    const checkboxes1 = document.getElementsByName("1");
    const checkboxes2 = document.getElementsByName("2");
    const checkboxes3 = document.getElementsByName("3");

    if (categoryId === 1) {
      for (let i = 0; i < checkboxes1.length; i++) {
        if (checkboxes1[i] !== target) {
          checkboxes1[i].checked = false;
        }
      }
    }
    if (categoryId === 2) {
      for (let i = 0; i < checkboxes2.length; i++) {
        if (checkboxes2[i] !== target) {
          checkboxes2[i].checked = false;
        }
      }
    }
    if (categoryId === 3) {
      for (let i = 0; i < checkboxes3.length; i++) {
        if (checkboxes3[i] !== target) {
          checkboxes3[i].checked = false;
        }
      }
    }
    clickSubCategory(e, categoryId);
  };

  useEffect(() => {
    setActiveArr(state);
  }, []);

  return (
    <S.AccodionContainer>
      <S.Div>필터</S.Div>
      {FILTER.map((category, index) => {
        let isActive = active === category.filter;
        if (multiple)
          isActive = activeArr.some(
            arrayitem =>
              arrayitem.filter === category.filter && arrayitem.active
          );
        return (
          <S.AccordionContent key={index}>
            <S.Header onClick={() => handleClick(category.filter)}>
              {category.filter}
              {isActive ? (
                <HiOutlineMinus
                  className="categoryOpenIcon"
                  onClick={() => handleClick(category.filter)}
                />
              ) : (
                <HiOutlinePlus
                  className="categoryOpenIcon"
                  onClick={() => handleClick(category.filter)}
                />
              )}
            </S.Header>
            <S.Content1 itemName={category.filter} isActive={isActive}>
              <S.Inner id={category.filter}>
                {isActive ? (
                  <S.SubCategories>
                    {category.subCategories.map(
                      ({ subCategory, subCategoryId }, index) => {
                        return (
                          <S.SubCategory key={subCategoryId}>
                            <S.CheckInput
                              name={`${category.categoryId}`}
                              id={subCategoryId}
                              onChange={e =>
                                checkOnlyOne(e, category.categoryId)
                              }
                            />
                            <S.SubLi>{subCategory}</S.SubLi>
                          </S.SubCategory>
                        );
                      }
                    )}
                  </S.SubCategories>
                ) : (
                  <S.Span2>모든 {category.filter}</S.Span2>
                )}
              </S.Inner>
            </S.Content1>
          </S.AccordionContent>
        );
      })}
    </S.AccodionContainer>
  );
};

export default Accordion;
