import * as React from 'react';


interface IProps{

}

interface IState{

}

class Header extends React.Component<IProps, IState>{
    public render(){
        return(
            <div className="header">
                <p>this is the header</p>
            </div>
        );
    }
}

export default Header;