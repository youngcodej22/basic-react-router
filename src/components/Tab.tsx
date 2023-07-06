type Tab = {
  navigate: string;
  children: string;
  push: (navigate: string) => void;
};

const Tab = ({ navigate, children, push }: Tab) => {
  const path = window.location.pathname;

  return (
    <li
      className={path === navigate ? "active" : ""}
      onClick={() => push(navigate)}
    >
      {children}
    </li>
  );
};

export default Tab;
