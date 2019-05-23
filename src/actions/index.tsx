import * as Constants from '../constants';

export interface IncrementEnthusiasm{
    type: Constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm{
    type: Constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm() : IncrementEnthusiasm{
   
    return {
        type: Constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm() : DecrementEnthusiasm{
    return {
        type: Constants.DECREMENT_ENTHUSIASM
    }
}