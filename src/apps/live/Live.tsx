import React, { useEffect, useState } from "react";
import { getPositions, PlayerPosition } from "./Live.domain";
import { LivePositions } from "./Live.styles";

const Live = () => {
  const [positions, setPositions] = useState<PlayerPosition[]>([]);
  useEffect(() => {
    setPositions(getPositions());
  }, []);
  return positions?.length ? (
    <LivePositions>
      <thead className="ds-uppercase">
        <th>Pos.</th>
        <th>Name</th>
        <th>Sector 1</th>
        <th>Sector 2</th>
        <th>Sector 3</th>
        <th>Int.</th>
      </thead>
      <tbody>
        {positions.map((position) => (
          <tr key={`p-${position.position}`}>
            <td>{position.position}</td>
            <td className="ds-bg-[rgb(48,_49,_52)]">{position.player}</td>
            <td>{position.sector1}</td>
            <td className="ds-bg-[rgb(48,_49,_52)]">{position.sector2}</td>
            <td>{position.sector3}</td>
            <td className="ds-bg-[rgb(48,_49,_52)]">{position.int}</td>
          </tr>
        ))}
      </tbody>
    </LivePositions>
  ) : (
    <></>
  );
};

export default Live;
