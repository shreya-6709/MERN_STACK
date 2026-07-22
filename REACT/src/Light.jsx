import { useState } from "react";

function Light() {
  const [light, setLight] = useState(false);

  return (
    <div>
      <h2>Light is {light ? "ON 💡" : "OFF 🌑"}</h2>

      <button onClick={() => setLight(true)}>
        ON
      </button>

      <button onClick={() => setLight(false)}>
        OFF
      </button>
    </div>
  );
}

export default Light;