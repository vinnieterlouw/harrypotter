export default function CharacterCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img
        src={props.imgUrl}
        alt={props.name}
        style={{ maxWidth: 400, minWidth: 400 }}
      />
    </div>
  );
}
