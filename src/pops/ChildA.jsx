const ChildA = (prop) => {
  console.log(prop);
  return (
    <div>
      <h1>{prop.x}</h1>
    </div>
  );
};
export default ChildA;
