
const Box = ({
  children,
  width,
  display,
  flexDirection,
  justify,
  gap
}) => {

  const style = `
    ${width}
    ${display}
    ${flexDirection}
    ${justify}
    ${gap}
  `;

  return (
    <>
      <div className={style}>{children}</div>
    </>
  );
}

export default Box;
