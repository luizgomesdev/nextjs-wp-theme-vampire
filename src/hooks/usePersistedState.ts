import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export default function usePersistedState<T>(key: string, initialState: any): Response<T> {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        () => {
            const storageValue = localStorage.getItem(key);

            console.log(storageValue);
            if (storageValue) {
                return JSON.parse(storageValue);
            } else {
                return initialState;
            }
        };
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}
