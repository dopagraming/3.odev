import React from "react";

const SetText = ({ value }) => {
  return (
    <>
      {value.Mavi > 0 ? (
        <div style={{ textAlign: "center" }}>
          <p>Mavi butona tıklandı</p>
          <p>Mavi butona {value.Mavi} defa tıklandı</p>
        </div>
      ) : (
        ""
      )}
      {value.Sari > 0 ? (
        <div style={{ textAlign: "center" }}>
          <p>Sarı butona tıklandı</p>
          <p>Sarı butona {value.Sari} defa tıklandı</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SetText;
