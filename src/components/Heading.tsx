type HeadingProps = {
  children: string;
};

export function Heading(props: HeadingProps) {
  return <h1>{props.children}</h1>;
}
