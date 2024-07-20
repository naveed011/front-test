import React from 'react';

export interface PlayerProperties {
  firstname: string;
  lastname: string;
  birthday: string;
  image: string;
}

export interface Player {
  id: string;
  player: PlayerProperties;
}

export interface PlayerCardProps {
  player: PlayerProperties;
}

export interface PlayerListProps {
  players: Player[];
  loading: boolean;
}

export interface UseFetchCollectionsState {
  data: Player[];
  loading: boolean;
  error: string;
}

export interface UseFetchCollectionsReturn extends UseFetchCollectionsState {
  fetchPlayer: () => void;
  setData: React.Dispatch<React.SetStateAction<Player[]>>;
}

export interface UseFormHookReturn {
  values: PlayerProperties;
  handleChange: (e: React.ChangeEvent<any>) => void;
  errors: { [key: string]: string | undefined };
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  touched: { [key: string]: boolean | undefined };
}
