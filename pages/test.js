import React,{useState} from "react";
import Form from "react-bootstrap/Form";
const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="d-inline-flex m-2">
      <style>{`.element-visible { display: block }
              .element-hidden { display: none }
             `}</style>
      <Form onClick={() => setVisible(!visible)} className="d-flex gap-2 ">
        <span className="fst-normal" style={{fontSize: '14px'}}>Remote only</span>
        <Form.Check type="switch" id="custom-switch" />
        {visible ? "" : ""}
      </Form>
      <div className={visible ? "element-visible" : "element-hidden" }>
        <button className="bg-white text-primary border-0">clear</button>
      </div>
    </div>
  );
};

export default App;

