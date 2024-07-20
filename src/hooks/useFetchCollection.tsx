import { useEffect, useState } from "react";
import { fetchCollection } from "../lib/collection";
import { Player, UseFetchCollectionsState, UseFetchCollectionsReturn } from "../types/Player";

export const useFetchCollections = (): UseFetchCollectionsReturn => {
  const [state, setState] = useState<UseFetchCollectionsState>({
    data: [],
    loading: true,
    error: '',
  });

  const fetchPlayer = async () => {
    setState(prevState => ({ ...prevState, loading: true }));
    try {
      const res = await fetchCollection();
      setState({ data: res.data, loading: false, error: '' });
    } catch (error) {
      console.error(error);
      setState({ data: [], loading: false, error: 'Failed to Fetch Collection' });
    }
  };

  useEffect(() => {
    fetchPlayer();
  }, []);

  const setData = (data: Player[]) => {
    setState(prevState => ({ ...prevState, data }));
  };

  return { ...state, fetchPlayer, setData };
};
