import React from 'react';

const Info = ({ registrosMostrados, totalRegistros }) => {
  return (
    <div>
      {`${registrosMostrados} de ${totalRegistros}`}
    </div>
  );
};

export default Info;
