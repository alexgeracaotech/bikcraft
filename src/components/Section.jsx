
const Section = ({
  children,
  backgroundColor,
  color,
  heigth,
  paddingX,
  display,
  gap
}) => {

  const style = `
    ${backgroundColor}
    ${color}
    ${heigth}
    ${paddingX}
    ${display}
    ${gap}
  `;

  return (
    <>
      <section className={style}>{children}</section>
    </>
  );
}

export default Section;
