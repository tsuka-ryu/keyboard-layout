import Key from './Key';

const KeyboardLayout = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '60px',
    padding: '20px',
  } as const;

  const halfStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '4px',
  } as const;

  const thumbKeysStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '4px',
    marginTop: '8px',
    width: '50%',  // 親要素の半分の幅に制限
    marginLeft: 'auto',
    marginRight: 'auto',
  } as const;

  return (
    <div style={containerStyle}>
      <div>
        <div style={halfStyle}>
          <Key label="Q" /><Key label="W" /><Key label="E" /><Key label="R" /><Key label="T" /><Key label="Y" />
          <Key label="A" /><Key label="S" /><Key label="D" /><Key label="F" /><Key label="G" /><Key label="H" />
          <Key label="Z" /><Key label="X" /><Key label="C" /><Key label="V" /><Key label="B" /><Key label="N" />
        </div>
        <div style={thumbKeysStyle}>
          <Key label="Ctrl" /><Key label="Alt" /><Key label="⌘" />
        </div>
      </div>
      
      <div>
        <div style={halfStyle}>
          <Key label="Y" /><Key label="U" /><Key label="I" /><Key label="O" /><Key label="P" /><Key label="[" />
          <Key label="H" /><Key label="J" /><Key label="K" /><Key label="L" /><Key label=";" /><Key label="'" />
          <Key label="N" /><Key label="M" /><Key label="," /><Key label="." /><Key label="/" /><Key label="⇧" />
        </div>
        <div style={thumbKeysStyle}>
          <Key label="Space" /><Key label="Alt" /><Key label="Ctrl" />
        </div>
      </div>
    </div>
  );
};

export default KeyboardLayout;
