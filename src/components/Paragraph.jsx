
const Paragraph = ({
  text,
  fontSize,
  color
}) => {

  const style = `
    ${fontSize}
    ${color}
  `;

  return (
    <>
      <p className={style}>{text}</p>
    </>
  );
}

export default Paragraph;
