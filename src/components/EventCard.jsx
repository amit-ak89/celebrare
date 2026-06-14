function EventCard({
  event,
  selected,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded shadow cursor-pointer ${
        selected
          ? "border-4 border-blue-500"
          : ""
      }`}
    >
      <h2>{event.name}</h2>

      <p>{event.location}</p>

      <p>{event.date}</p>
    </div>
  );
}

export default EventCard;