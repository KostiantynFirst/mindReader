import styled from "styled-components";

export const ModalBackground = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  background: white;
  width: 600px; 
  padding: 40px; 
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h2`
  margin-top: 0;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px; 
  margin-bottom: 20px; 
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px; 
`;

export const Button = styled.button`
  padding: 14px 28px; /* Увеличиваем размер кнопки */
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px; /* Увеличиваем размер шрифта */

  &:hover {
    background-color: #0056b3;
  }
`;

export const LoadingSection = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
`;