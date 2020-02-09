import React from "react";
import styled from "styled-components";

const Card = props => (
  <div {...props}>
    {props.firstName}:{props.id}
  </div>
);

const StyledCard = styled(Card)`
  background-color: white;
  padding: 2em;
  margin: 1.5em;
  border-radius: 2px;
  grid-column: ${props => (props.layoutLeft ? `1 / 2` : `2 / 3`)};
  grid-row: ${props =>
    !props.layoutLeft ? `${props.i + 1}/${props.i + 2}` : ""};
  &:hover {
    -webkit-box-shadow: 10px 10px 63px -12px rgba(59, 59, 59, 0.4);
    -moz-box-shadow: 10px 10px 63px -12px rgba(59, 59, 59, 0.4);
    box-shadow: 10px 10px 63px -12px rgba(59, 59, 59, 0.4);
    transition: 0.3s;
  }
`;
export default StyledCard;
