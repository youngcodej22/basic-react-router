type Button = {
  navigate: string;
  children: string;
  push: (navigate: string) => void;
};

const Button = ({ navigate, children, push }: Button) => {
  return <button onClick={() => push.push(navigate)}>{children}</button>;
};

export default Button;
