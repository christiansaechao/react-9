import React from "react";

export const PokemonCard = ({ data }: { data?: any }) => {

    return (
    <div>
      {data.results[0].name}
      <img src={data.sprites.front_default} />
    </div>
  );
};
