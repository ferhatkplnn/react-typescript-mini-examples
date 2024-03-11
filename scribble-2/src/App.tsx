import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form from "./components/Form";

const App = () => {
  const input = useRef<HTMLInputElement | null>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  };

  return (
    <main className="bg-fuchsia-900 text-fuchsia-50 p-8 rounded drop-shadow-xl flex flex-col space-y-4 w-screen max-w-screen-sm">
      <Form onSave={handleSave}>
        <Input id="name" label="Your name" type="text" />
        <Input id="name" label="Your age" type="number" ref={input} />
        <Button>Save</Button>
      </Form>

      <Container as={"code"}>Hello there</Container>
    </main>
  );
};

export default App;
