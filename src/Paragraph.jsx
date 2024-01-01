import { nanoid } from "nanoid";
const Paragraph = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return <p key={nanoid()}>{item}</p>;
      })}
    </div>
  );
};
export default Paragraph;
