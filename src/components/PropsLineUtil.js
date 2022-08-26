const Line = ({ text }) => {
  return (
    <p>
      {text.split("\n").map((txt) => (
        <>
          {txt}
          <br />
        </>
      ))}
    </p>
  );
};

export default Line;
