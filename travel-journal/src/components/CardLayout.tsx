/* wrap the page layout and its components */
export default function CardLayout({
  cardLayout,
}: {
  cardLayout: JSX.Element[];
}): JSX.Element {
  return <div className="bg-red-100 dark:bg-red-900">{cardLayout}</div>;
}
