export const rem = px => `${(px/16)}rem`;

export const saveState = (name, state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(name, serializedState);
};

export const loadState = (name) => {
    const serializedState = localStorage.getItem(name);

    if(serializedState === null) {
        return undefined;
    }

    return JSON.parse(serializedState);
};

