import React from 'react'

class BasicInfo extends React.Component {
    render() {
        //Destructure 'person' prop to extract values
        const { name, dateOfBirth, location} = this.props.person
        return (
            <div className='infoDiv'>
                <div className='infoContainer'>
                    <h4>Name:</h4>
                    <p>{name}</p>
                </div>
                <div className='infoContainer'>
                    <h4>Date of Birth:</h4>
                    <p>{dateOfBirth}</p>
                </div>
                <div className='infoContainer'>
                    <h4>Location:</h4>
                    <p>{location}</p>
                </div>
            </div>
        );
    }
}

export default BasicInfo;