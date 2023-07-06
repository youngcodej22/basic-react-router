import Button from "./Button";

const Home = (push: () => void) => {
  return (
    <>
      <h1>Home</h1>
      <Button navigate="/about" push={push}>
        About
      </Button>
    </>
  );
};

export default Home;
