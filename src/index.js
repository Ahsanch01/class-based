import React from 'react';
import reactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spiner from './Spiner';
import App1 from './components/App';
class App extends React.Component{
    state={lat:null,errorMessage:''}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{this.setState({lat:position.coords.latitude})},
            (err)=>{this.setState({errorMessage:err.message})}
        )
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return <div> Error:{this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return<div><SeasonDisplay lat={this.state.lat} /></div>
        }
       
        return <Spiner message='Allow to access location for smooth working'/>
    }
    render(){ 
        return(
            <div className='border red'>
                {this.renderContent()}
            </div>
        )
       
    }

    // render(){
    //     return(
    //         <div><App1 /></div>
    //     )
    // }
}
reactDOM.render(<App />,
    document.querySelector('#root'));