/**
 * Output the number of votes
 */
export function CardVotes(props: { votes: string }): JSX.Element {
  const { votes } = props;
  return <span>{votes}</span>;
}
