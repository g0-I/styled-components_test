import React from 'react';
import { Link } from '../components/Link';
import One from './one';

class Two extends React.Component{
    render(){
        return (
            <div>
                test_two<br/>
                <Link to='/' fontColor="red" isBluePattern={true}>Link to page one</Link>
            </div>
        )
    }
}

export default Two;
