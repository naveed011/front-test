import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFetchCollections } from '../hooks/useFetchCollection';
import { CreateCard } from './CreateCard';
import { Loading } from '../components/Loading';
import PlayerList from '../components/PlayerList';
import './Collection.css';
import { ErrorBoundary } from '../components/ErrorBoundary';


const Title = styled.h1`
text-align: center;
margin-top: 10px;
margin-bottom: 5px;
color: grey;
font-family: serif;
`

export const Collection: React.FC = () => {

  const { data, loading, error, fetchPlayer } = useFetchCollections();

  const [retrigger, setRetrigger] = useState(false)


  const retriggered = () => setRetrigger(true)

  useEffect(() => {
    if (retrigger) {
      fetchPlayer()
      setRetrigger(false)
    }
  }, [retrigger]);

  /**
   * Step 1: Render the card
   */
  return (
    <>

      <Title>Players Info Board - Naveed Test</Title>

      <Loading visible={loading} />

      {error && <ErrorBoundary>Unable To Fetch Players</ErrorBoundary> }

      <CreateCard retrigger={retriggered} />

      <PlayerList players={data} loading={loading} />

    </>

  )

};
