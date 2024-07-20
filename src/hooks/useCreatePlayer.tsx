import { useState } from 'react';
import { postCollection } from '../lib/collection';
import { PlayerProperties } from '../types/Player';
import { useFetchCollections } from './useFetchCollection';

interface UseCreatePlayerProps {
  setRetrigger: (value: boolean) => void;
}

export const useCreatePlayer = ({ setRetrigger }: UseCreatePlayerProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const { fetchPlayer } = useFetchCollections();

  const submitPlayer = async (values: PlayerProperties, { resetForm }: { resetForm: () => void }) => {
    setSubmitting(true);
    try {
      await postCollection(values);
      setError(false);
      resetForm();
      fetchPlayer();
      setShowPopup(false);
      setRetrigger(true);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return { submitPlayer, submitting, error, showPopup, setShowPopup };
};
