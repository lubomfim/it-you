import { ButtonWrapper } from './index.styled';

export type ButtonProps = {
  children: React.ReactNode;
  handleClick: () => void;
};

const Button = ({ children, handleClick }: ButtonProps) => {
  return <ButtonWrapper onClick={handleClick}>{children}</ButtonWrapper>;
};

export default Button;
