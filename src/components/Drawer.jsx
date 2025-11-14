
const Drawer = ({
  children,
  color
}) => {

  const style = `
    ${color}
  `;

  return (
    <>
      <span className={style}>{children}</span>
    </>
  );
}

export default Drawer;
