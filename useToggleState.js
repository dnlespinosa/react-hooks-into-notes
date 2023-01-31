import React, { useState } from 'react';

const useToggleState = (intialState) => {
    const [state, setState] = useState(intialState);
    const toggleState =  () => {
        setState(state => !state)
    }
    return [state, toggleState]
}

export default useToggleState
