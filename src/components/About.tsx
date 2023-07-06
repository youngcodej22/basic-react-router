import Button from "./Button";

const About = (push: () => void) => {
  return (
    <>
      <h1>About</h1>
      <Button navigate="/" push={push}>
        Home
      </Button>
    </>
  );
};

export default About;
