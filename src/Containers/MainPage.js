import React, {Component} from 'react'
import DoctorContainer from './DoctorContainer';
import PatientContainer from './PatientContainer';

class MainPage extends Component {

    render(){
        return(
            <div>
                <h1> This is the Main Page! </h1>
                <DoctorContainer/>
                <PatientContainer/>
            </div>
        )
    }
}

export default MainPage;