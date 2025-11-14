
const Button = ({
  text,
  width,
  backgroundColor,
  color,
  paddingX,
  paddingY,
  fontSize,
  fontWeight,
  fontCase,
  borderRadius,
  hover,
  transition,
  cursor
}) => {

  const style = `
    ${width}
    ${backgroundColor}
    ${color}
    ${paddingX}
    ${paddingY}
    ${fontSize}
    ${fontWeight}
    ${fontCase}
    ${borderRadius}
    ${hover}
    ${transition}
    ${cursor}
  `;

  return (
    <>
      <button className={style}>{text}</button>
    </>
  );
}

export default Button;
