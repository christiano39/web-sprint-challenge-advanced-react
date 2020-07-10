import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useLightMode = initialValue => {
    const [lightMode, setlightMode] = useLocalStorage('lightmode', initialValue);

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        lightMode ? body.classList.add('light-mode') : body.classList.remove('light-mode');
    }, [lightMode]);

    return [lightMode, setlightMode];
}

export default useLightMode;