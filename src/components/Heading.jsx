
const Heading = ({
  children,
  fontSize,
  fontWeight
}) => {

  const style = `
    ${fontSize}
    ${fontWeight}
  `;
  
  return (
    <>
      <h1 className={style}>{children}</h1>
    </>
  );
}

export default Heading;
