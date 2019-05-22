import * as Constants from '../constants';

export interface IncrementEnthusiasm{
    type: Constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm{
    type: Constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function IncrementEnthusiasm() : IncrementEnthusiasm{
    return {
        type: Constants.INCREMENT_ENTHUSIASM
    }
}

export function DecrementEnthusiasm() : DecrementEnthusiasm{
    return {
        type: Constants.DECREMENT_ENTHUSIASM
    }
}