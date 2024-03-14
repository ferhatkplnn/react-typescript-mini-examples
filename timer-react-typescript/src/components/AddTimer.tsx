import { useRef } from "react";
import Form, { type TFormHandle } from "./UI/Form";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { useTimersContext } from "../store/timersContext";

const AddTimer = () => {
  const formRef = useRef<TFormHandle>(null);
  const { addTimer } = useTimersContext();

  const handleSaveTimer = (data: unknown) => {
    const extractedData = data as { name: string; duration: string };
    addTimer({ name: extractedData.name, duration: +extractedData.duration });
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
