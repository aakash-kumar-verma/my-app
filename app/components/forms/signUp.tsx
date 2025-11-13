import { Button } from "../Button";
import { TextInput } from "../Inputs/TextInput";

export const SignUpForm = () => {
  return (
    <>
      <TextInput placeholder="Name" value="" onChange={() => {}} />
      <TextInput placeholder="Email" value="" onChange={() => {}} />
      <TextInput placeholder="Password" value="" onChange={() => {}} />
      <TextInput placeholder="Re-type password" value="" onChange={() => {}} />
      <Button title="Sign up" onClick={() => {}} variant="secondary" />
    </>
  );
};
