import React from 'react';

const Duration = (props) => {

    const prop = parseInt(props.min.slice(2,5));

    const hour = ((prop / 60).toFixed(1)[0]);

    const minute = prop - (hour * 60);

return <span>{hour}h {minute}min</span>

}

export default Duration;