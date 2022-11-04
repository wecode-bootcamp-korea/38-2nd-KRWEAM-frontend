import styled from "styled-components";
import { Link } from "react-router-dom";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 240px);
  max-width: 1200px;
  margin: 0 auto;
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
`;

export const CategoryContainer = styled.div`
  margin: 10px;
`;

export const CategoryImg = styled.img`
  width: 220px;
  height: 100px;
  border: none;
  border-radius: 12px;
`;

export const CategoryText = styled.p`
  margin-top: 8px;
  color: #333;
  font-size: 15px;
  text-align: center;
`;
