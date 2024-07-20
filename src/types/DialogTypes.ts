import React from 'react';

export interface DialogProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
