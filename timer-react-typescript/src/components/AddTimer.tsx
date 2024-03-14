import { useRef } from "react";
import Form, { type TFormHandle } from "./UI/Form";
import Input from "./UI/Input";
import Button from "./UI/Button";

const AddTimer = () => {
  const formRef = useRef<TFormHandle>(null);

  const handleSaveTimer = (data: unknown) => {
    const extractedData = data as { name: string; duration: string };
    console.log(extractedData);
    formRef.current?.clear();
  };

  return (
    <Form ref={formRef} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <div>
        <Button>Add Timer</Button>
      </div>
    </Form>
  );
};

export default AddTimer;
