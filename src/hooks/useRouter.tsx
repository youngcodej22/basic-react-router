import { useEffect, useState } from "react";

const useRouter = () => {
  const [route, setRoute] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname);
    };

    window.onpopstate = handlePopState;

    return () => {
      window.onpopstate = null;
    };
  }, []);

  const push = (path: string) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };

  return { route, push };
};

export default useRouter;
