import React from 'react';

const ValidationComponent = (props) => {

    const style = {

        

            fontFamily: 'Courier New Courier monospace',
            fontSize: '16px',
    }

    const p1 = {

        color:'green',
        textShadow: '1px 1px 2px #000000'

    }
    const p2 = {
        color:'red',
        textShadow: '1px 1px 2px #000000'

        
    }
    return (

        <div style={style}>
            {
                props.txtlen > 5 ?
                    <p style={p1} >Text long enough</p> :
                    <p style={p2}>Text too short</p>
            }        </div>
    );

};
export default ValidationComponent;