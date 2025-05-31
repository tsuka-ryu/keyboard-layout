import Key from "./Key";

type KeyData = {
  label: string;
};

type KeyboardData = {
  left: {
    main: KeyData[][];
    thumb: KeyData[];
  };
  right: {
    main: KeyData[][];
    thumb: KeyData[];
  };
};

type KeyboardLayoutProps = {
  layout: KeyboardData;
};

const KeyboardLayout = ({ layout }: KeyboardLayoutProps) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "60px",
    padding: "20px",
  } as const;

  const halfStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: "4px",
  } as const;

  const thumbKeysStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "4px",
    marginTop: "8px",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  } as const;

  return (
    <div style={containerStyle}>
      <div>
        <div style={halfStyle}>
          {layout.left.main.map((row, rowIndex) =>
            row.map((key, keyIndex) => (
              <Key key={`left-${rowIndex}-${keyIndex}`} label={key.label} />
            ))
          )}
        </div>
        <div style={thumbKeysStyle}>
          {layout.left.thumb.map((key, index) => (
            <Key key={`left-thumb-${index}`} label={key.label} />
          ))}
        </div>
      </div>

      <div>
        <div style={halfStyle}>
          {layout.right.main.map((row, rowIndex) =>
            row.map((key, keyIndex) => (
              <Key key={`right-${rowIndex}-${keyIndex}`} label={key.label} />
            ))
          )}
        </div>
        <div style={thumbKeysStyle}>
          {layout.right.thumb.map((key, index) => (
            <Key key={`right-thumb-${index}`} label={key.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyboardLayout;
