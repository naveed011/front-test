import React from "react";
import styled from "styled-components";
import PlayerCard from "./PlayerCard";
import { PlayerListProps } from "../types/Player";
import { Loading } from './Loading';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const PlayerList: React.FC<PlayerListProps> = ({ players, loading }) => {
  if (loading) return <Loading visible={loading}/>

  return (
    <Container>
      {players.map(({ player, id }) => (
        <PlayerCard key={id} player={player} />
      ))}
    </Container>
  );
};

export default PlayerList;
