type TProps = {
  title: string;
  description: string;
  right?: React.ReactNode;
};

export function Header({ title, description, right }: TProps) {
  return (
    <div className="flex justify-between w-full">
      <div>
        <h1 className="text-3xl">{title}</h1>
        <label>{description}</label>
      </div>
      <div className="flex">{right}</div>
    </div>
  );
}
