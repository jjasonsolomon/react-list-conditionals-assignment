import React from 'react';

import './CharComponent.css'

const CharComponent = (props) =>
{

    


    return(
<div onClick ={props.clicked} className='charComponent'>

{props.character}
</div>
    )


}

export default CharComponent;