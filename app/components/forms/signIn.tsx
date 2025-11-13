import { Button } from "../Button";
import { TextInput } from "../Inputs/TextInput";

export const SignInForm = () => {
  return (
    <>
      <TextInput placeholder="Email" value="" onChange={() => {}} />
      <TextInput placeholder="Password" value="" onChange={() => {}} />

      <Button title="Sign in" onClick={() => {}} variant="primary" />
    </>
  );
};
