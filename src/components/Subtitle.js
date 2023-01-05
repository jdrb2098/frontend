import React from "react";

const Subtitle = ({ title, mt = 0, mb = 0 }) => {
  return (
    <div className="row">
      <label
        className={`border rounded-pill px-4 mt-${mt} mb-${mb} text-white fs-5 p-1`}
        style={{
          backgroundImage: "linear-gradient( #1c2355)",
        }}
      >
        {title}
      </label>
    </div>
  );
};
export default Subtitle;
