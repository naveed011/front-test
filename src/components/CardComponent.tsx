import React from 'react'
import Card from '../types/Card';
import { LazyImage } from './LazyImage';
import styled from 'styled-components';

interface CardComponentProps {
  card: Card;
}
const getImageUrl = (id: number) => `https://images.fotmob.com/image_resources/playerimages/${id}.png`;


export const CardComponent = ({ card }: CardComponentProps) => {


  const imageUrl = getImageUrl(card.id);

  return (
    <CardWrapper>
      <LazyImage src={imageUrl} alt={`${card.player.firstname} ${card.player.lastname}`} />
      <h2>{card.player.firstname} {card.player.lastname}</h2>
      <p>DOB: {card.player.birthday}</p>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
`;
