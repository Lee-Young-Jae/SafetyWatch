interface BoldifyKeywordProps {
  text: string;
  keyword: string;
}

const BoldifyKeyword = ({ text, keyword }: BoldifyKeywordProps) => {
  const reg = new RegExp(keyword, "gi");
  const matched = text.match(reg);

  if (!matched) return <>{text}</>;

  const splitText = text.split(reg);

  return (
    <>
      {splitText.map((text, index) => (
        <span
          key={index}
          style={{ wordWrap: "break-word", wordBreak: "keep-all" }}
        >
          {text}
          {index !== splitText.length - 1 && <b>{matched[index]}</b>}
        </span>
      ))}
    </>
  );
};

export default BoldifyKeyword;
