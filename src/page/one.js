import React from 'react';
import { Link } from '../components/Link';
// import Two from './two';

class One extends React.Component{
    render(){
        return (
            <div>
                test_one<br/>
                <Link to='/two' fontColor="blue" isBluePattern={false}>Link to page two</Link> 
            </div>
        )
    } 
}

export default One;
