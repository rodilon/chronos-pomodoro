// type DefaultInputProps = {
//   type: 'text' | 'number' | 'search'; // union type
// };

type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>; // extends all input attributes

export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input id={id} type={type} />
    </>
  );
}
