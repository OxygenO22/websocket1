import { ChangeEvent } from 'react'

type myInputProps = {
  title: string;
  handleInput: (title: string) => void;
  addTodo: () => void;  
}

const MyInput = ({ title, handleInput, addTodo }: myInputProps) => {
  return (
    <label>
      <input
        type="text"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInput(e.target.value)
        }
      />
      <button onClick={addTodo}>Add Todo</button>
    </label>
  );
};

export default MyInput
