
const Header = ({
  children,
  backgroundColor,
  color,
  paddingX
}) => {

  const style = `
    ${backgroundColor}
    ${color}
    ${paddingX}
  `;

  return (
    <>
      <header className={style}>{children}</header>
    </>
  );
}

export default Header;
