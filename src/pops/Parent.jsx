import ChildA from "./ChildA";
const Parent = () => {
  let data = "Hello World";
  return (
    <div>
      <ChildA x={data}/>
    </div>
  );
};
export default Parent;
