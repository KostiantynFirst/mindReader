import { useState } from 'react'
import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ModalBackground, Modal, Title, Label, Input, Button, LoadingSection} from './App.styled';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const messages = [
    "Analyzing brainwaves",
    "Scanning memories",
    "Calculating probabilities",
    "Decoding thoughts",
  ];

  const handleSubmit = () => {
    const numberValue = parseInt(number, 10);
    if (numberValue >= 1 && numberValue <= 10) {
      setLoading(true);
      setShowModal(false);
      let index = 0;
      const interval = setInterval(() => {
        if (index < messages.length) {
          setLoadingMessage(messages[index]);
          index += 1;
        } else {
          clearInterval(interval);
          setLoadingMessage(`You're thinking of number ${numberValue}`);
        }
      }, 3000);
    } else {
      toast.error('Введите число от 1 до 10.');
    }
  };

  return (
    <>
      <ToastContainer />
      <ModalBackground show={showModal}>
        <Modal>
          <Title>Mind reader of Volodya</Title>
          <Label htmlFor="number-input">Think of number between 1 and 10:</Label>
          <Input
            type="number"
            id="number-input"
            min="1"
            max="10"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Button onClick={handleSubmit}>Read Volodya mind</Button>
        </Modal>
      </ModalBackground>
      {loading && (
        <ModalBackground show={loading}>
          <Modal>
            <Title>Processing...</Title>
            <LoadingSection>{loadingMessage}</LoadingSection>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}

export default App;