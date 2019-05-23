import * as React from "react";
import './Hello.css';

export interface Props{
    name: string;
    enthusiasmLevel : number;
    //heres how we describe function
    onIncrement?: () => void;
    onDecrement?: () => void;
}

interface State{
  
}

class HelloClass extends React.Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {currentEnthusiasm : props.enthusiasmLevel || 1};
    }

    //onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    //onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

    getExclamationMarks(numChars: number){
        return Array(numChars + 1).join("!");
    }

    render(){
        const {name} = this.props;
        
        if( this.props.enthusiasmLevel <= 0 ){
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
              <div className="greeting">
                Hello {name + this.getExclamationMarks(this.props.enthusiasmLevel)}
              </div>
              <button onClick={this.props.onDecrement}>-</button>
              <button onClick={this.props.onIncrement}>+</button>
            </div>
          );
    }
}

export default HelloClass;