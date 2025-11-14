
const List = ({
  children,
  display,
  gap
}) => {

  const style = `
    ${display}
    ${gap}
  `;

  return (
    <>
      <ul className={style}>{children}</ul>
    </>
  );
}

export default List;
