import React, { useState } from 'react';
import { turtles } from './turtles';
import * as S from './styles';

const StateHookNinjaTurtles = (): JSX.Element => {
  const [selectTurtles, setSelectTurtles] = useState<string[]>([]);

  const isChecked = (turtle: string): boolean => !!selectTurtles.find((tur) => tur === turtle);

  const handleSelectTurtle = (turtle: string): void => {
    const turtleInArray = selectTurtles.find((tur) => tur === turtle);

    if (turtleInArray) {
      setSelectTurtles(selectTurtles.filter((tur) => tur !== turtle));
    } else {
      setSelectTurtles([...selectTurtles, turtle]);
    }
  };

  return (
    <>
      <header>
        <h4>Click in the Ninja Turtles</h4>
      </header>
      <S.Section>
        {turtles.map((turtle, index) => (
          <S.Turtle key={index}>
            <S.Img
              key={index}
              src={`/images/ninja_turtles/${isChecked(turtle.name) ? turtle.image : `${turtle.image}_outline`}.svg`}
              onClick={(): void => handleSelectTurtle(turtle.name)}
            />
            <S.Name>{turtle.name}</S.Name>
          </S.Turtle>
        ))}
      </S.Section>
    </>
  );
};

export default StateHookNinjaTurtles;
