import React from 'react';

function usePersist(key, initVal) {
    const hooksKey = "hooks:" + key;
    const value = () => {
        try {
            const item = window.localStorage.getItem(hooksKey);
            return item ? JSON.parse(item) : initVal;
        } catch (err) {
            console.log(err);
            return initVal;
        }
    }
    const setVal = (val) => {
        try {
            setSavedValue(val);
            window.localStorage.setItem(hooksKey, JSON.stringify(val));
        } catch (err) {
            console.log(err);
        }
    }
    const [savedValue, setSavedValue] = React.useState(value);
    return [savedValue, setVal];
}

export default usePersist;
