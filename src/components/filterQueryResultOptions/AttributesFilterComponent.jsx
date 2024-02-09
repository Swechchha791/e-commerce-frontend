import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
      {[{ color: ["red", "blue", "green"] }, { ram: ["1 TB", "2 TB"] }].map((item, idx) => (
        <div key={idx} className="md-3">
          <Form.Label><b>{Object.keys(item)}</b></Form.Label>
          {item[Object.keys(item)].map((el, idx)=>(
            <Form.Check key={idx}
            type="checkbox"
            label={el}
          />
          ))}
        </div>
      ))}
    </>
  );
};

export default AttributesFilterComponent;
