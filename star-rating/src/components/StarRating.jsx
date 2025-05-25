export default function StarRating({
  totalStars = 5,
  filledStars = 0,
  handleClick,
  handleMouseHover,
  handleMouseLeave,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2px",
        color: "#f5b301", // Make sure stars have a visible color
        cursor: "pointer",
      }}
    >
      {Array.from({ length: totalStars }).map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < filledStars ? "#f5b301" : "none"} // fill yellow or none
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          data-index={index + 1}
          onMouseOver={handleMouseHover}
          onMouseOut={handleMouseLeave}
          onClick={handleClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.49 10.101c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ))}
    </div>
  );
}
