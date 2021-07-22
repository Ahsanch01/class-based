import React from 'react';

const Spiner=(props)=>{
    return(
            <div class="ui active dimmer">
                <div class="ui text loader">{props.message}</div>
            </div>
    )
};
// Spinner.defaultprops ={
//     message:'Loading please wait a minute',
// }
export default Spiner;