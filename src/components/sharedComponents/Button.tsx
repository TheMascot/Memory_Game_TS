interface Props {
  id: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  type: 'normal' | 'small' | 'newgame';
  data?: string;
  selected?: boolean;
}

function Button({ onClick, label, type, data, selected, id }: Props) {
  const styles = {
    newgame:
      'py-2 px-4 rounded-xl text-lg md:text-xl lg:text-2xl font-bold underline underline-offset-4 border-2 border-slate-800 text-amber-500 bg-blue-700 hover:bg-blue-800 hover:translate-y-0.5 h-[100%] shadow-md shadow-blue-950 hover:shadow-none',
    normal:
      'py-2 px-4 rounded-xl text-xl border-2 border-slate-800 text-amber-500 bg-blue-700 hover:bg-blue-800 hover:translate-y-0.5 shadow-md shadow-blue-950 hover:shadow-none',
    small:
      'py-1 px-1 rounded-md text-md border-1 border-slate-800 text-amber-500 bg-blue-700 hover:bg-blue-800 hover:translate-y-0.5 shadow-md shadow-blue-950 hover:shadow-none',
    selected:
      'py-1 px-1 rounded-md text-md border-1 border-amber-400 text-slate-700 bg-blue-400 hover:bg-blue-600 hover:translate-y-0.5 shadow-md shadow-blue-800 hover:shadow-none',
  };
  return (
    <button
      className={selected ? styles.selected : styles[type]}
      onClick={onClick}
      data-family={data}
      id={id}
    >
      {label}
    </button>
  );
}

export default Button;
