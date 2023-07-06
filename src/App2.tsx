import { useEffect, useState } from "react";
import "./App.css";

function useRouter(routes) {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setLocation(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState(null, "", to);
    setLocation(to);
  };

  const Component = routes.find((route) => route.path === location)?.component;

  return { location, navigate, Component };
}

// 예제 컴포넌트
function Home() {
  return (
    <>
      <h1>Home: Root</h1>
      <a href="/about" onClick={() => navigate("/about")}>
        About
      </a>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About</h1>
      <a href="/" onClick={() => navigate("/")}>
        Home
      </a>
    </>
  );
}

function App() {
  const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
  ];

  const { location, navigate, Component } = useRouter(routes);

  return (
    <div>
      <Component />
    </div>
  );

  // return (
  //   <>
  //     <div>
  //       <Route path="/" component={Home} />
  //       <Route path="/about" component={About} />
  //     </div>
  //   </>
  // );
}

export default App;
