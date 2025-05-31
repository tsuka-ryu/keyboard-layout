const Key = ({ label }: { label: string }) => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 10px", 
    margin: "2px", 
    borderRadius: "4px", 
    border: "1.5px solid #ccc", 
    background: "linear-gradient(145deg, #f0f0f0, #dcdcdc)",
    boxShadow: "1.5px 1.5px 4px #bbb, -1.5px -1.5px 4px #fff", // シャドウも調整
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: "600",
    fontSize: "14px", 
    userSelect: "none" as const,
    cursor: "default",
    textAlign: "center" as const,
    minWidth: "24px", 
    height: "32px", 
  } as const;

  return <div style={style}>{label}</div>;
};

export default Key;
