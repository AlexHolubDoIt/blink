import React, {useCallback, useEffect, useState} from 'react';

const timeout = 250;

const Blink = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true)

    const handleChangeVisibleState = useCallback(() => {
        setIsVisible((stateVisible) => !stateVisible)
    }, [setIsVisible])

    useEffect(() => {
        const timer = setTimeout(handleChangeVisibleState, timeout);

        return () => clearTimeout(timer);
    }, [isVisible, handleChangeVisibleState])

    const activeClass = `react-blink ${!isVisible ? 'hidden' : ''}`;

    return(
        <div className={activeClass}>
            {children}
        </div>
    )
}

export default Blink;
