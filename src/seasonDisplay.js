import React from 'react';
import './SeasonDisplay.css';
const seasonConfig={
    Summer:{
        text:"lets hint the beach",
        iconName:'sun'
    },
    Winter:{
        text:'its chilly Now',
        iconName:'snowflake'
    }
}

const getSeason=(lat,month)=>{
    if(month>2 && month<9){
        return lat>0? 'Summer' :"Winter"
    }
    else{
        return lat>0?'Winter':'Summer'
    }

}
const seasonDisplay=(props)=>{
   const Season =getSeason(props.lat,new Date().getMonth());
 
   console.log(Season);
   const {text , iconName}=seasonConfig[Season];
  
    return(
        <div className={`Season-display ${Season}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
};

export default seasonDisplay;