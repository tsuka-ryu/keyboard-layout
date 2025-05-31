const Key = ({ label }: { label: string }) => {
  const style = {
    display: "inline-block",
    padding: "8px 14px",
    margin: "4px",
    borderRadius: "6px",
    border: "2px solid #ccc",
    background: "linear-gradient(145deg, #f0f0f0, #dcdcdc)",
    boxShadow: "2px 2px 5px #bbb, -2px -2px 5px #fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: "600",
    userSelect: "none",
    cursor: "default",
    textAlign: "center",
    minWidth: "30px",
  } as const;

  return <div style={style}>{label}</div>;
};

export default Key;
