import React, { useEffect, useCallback } from "react";
import { useCountUp } from 'react-countup';

import { Container, Counter, Label } from "./styles";

const ContUp = ({ label, isHighlighted, end }) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end,
    duration: 4,
  });

  const memoizedUpdate = useCallback(() => {
    update(end);
  }, [end, update]);

  useEffect(() => {
    memoizedUpdate();
  }, [memoizedUpdate]);

  return (
    <Container>
      <Counter isHighlighted={isHighlighted}>{countUp}</Counter>
      <Label>{label}</Label>
    </Container>
  );
};

export default ContUp;
