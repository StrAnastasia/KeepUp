function CheckedCheckbox({ bgColor = "white" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="23" height="23" rx="7.5" fill={bgColor} />
      <rect x="0.5" y="0.5" width="23" height="23" rx="7.5" stroke="black" />
      <path
        d="M7 13.4545L9.5 16L17 8"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CheckedCheckbox;
