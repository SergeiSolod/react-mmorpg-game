import React from "react";

const UserIcon = ({ stroke = "#fff" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 21C5.38889 18 8.5 15 12 15C15.5 15 18.6111 18 19 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon;
