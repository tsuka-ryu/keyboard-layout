const Key = ({ label }: { label: string }) => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 10px",
    margin: "2px",
    borderRadius: "4px",
    background: !!label ? "rgba(255, 255, 255, 0.7)" : "transparent",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: "600",
    fontSize: "12px",
    userSelect: "none" as const,
    cursor: "default",
    textAlign: "center" as const,
    minWidth: "24px",
    height: "32px",
  } as const;

  return <div style={style}>{label}</div>;
};

export default Key;
