
const Navigation = ({
  children,
  heigth,
  display,
  justify,
  align
}) => {

  const style = `
    ${heigth}
    ${display}
    ${justify}
    ${align}
  `;

  return (
    <>
      <nav className={style}>{children}</nav>
    </>
  );
}

export default Navigation;
