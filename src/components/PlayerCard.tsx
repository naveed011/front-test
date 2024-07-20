import React from "react";
import styled from "styled-components";
import moment from "moment";
import { PlayerCardProps } from "../types/Player";
import { LazyImage } from './LazyImage';

const Card = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;

  @media all and (min-width: 37.5em) {
    width: calc(100% / 12 * 6);
  }

  @media all and (min-width: 56.25em) {
    width: calc(100% / 12 * 4);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
  background-color: #f3e5f5;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayerName = styled.h3`
  padding: 1em 1em 0;
  color: #32027a;
`;

const BirthDate = styled.p`
  padding: 1em 1em 0;
`;

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => (
  <Card >
    <CardContent>
      <LazyImage src={player.image} alt={`${player.firstname} ${player.lastname}`}/>
      <InfoContainer>
        <PlayerName>{`${player.firstname} ${player.lastname}`}</PlayerName>
        <BirthDate>
          <strong>Date of Birth:</strong>{' '}
          {moment(player.birthday).format('MM/DD/YYYY')}
        </BirthDate>
      </InfoContainer>
    </CardContent>
  </Card>
);

export default PlayerCard;
