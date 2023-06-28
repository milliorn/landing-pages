/**
 * create titles for cards
 */
export function CardTitle(props: { title: string }): JSX.Element {
  const { title } = props;
  return (
    <div className="flex items-center justify-between leading-none md:p-4">
      <p className="no-underline hover:underline">{title}</p>
    </div>
  );
}
