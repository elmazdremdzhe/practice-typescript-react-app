import HelloClass from '../components/HelloClass';
import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

function mapStateToProps({enthusiasmLevel, languageName} : StoreState){
    return{
        enthusiasmLevel,
        name:languageName,
    }
}

function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>){
    return{
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloClass)