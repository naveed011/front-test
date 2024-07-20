import React from 'react';
import styled from 'styled-components';
import { DialogProps } from '../types/DialogTypes';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DialogWrapper = styled.div`
  width: 500px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: 1001;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5em;
  top: 10px;
  right: 20px;
  cursor: pointer;
`;

const DialogHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const DialogBody = styled.div`
  margin-top: 10px;
`;

const Dialog: React.FC<DialogProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <Overlay>
      <DialogWrapper>
        <DialogHeader>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </DialogHeader>
        <DialogBody>
          {children}
        </DialogBody>
      </DialogWrapper>
    </Overlay>
  );
};

export default Dialog;
