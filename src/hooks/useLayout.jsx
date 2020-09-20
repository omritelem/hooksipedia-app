import { useEffect, useState } from "react";

import { LIST_LAYOUT, LAYOUT_KEY, CARDS_LAYOUT } from '../utils/constants';

const useLayout = () => {
    const [layout, setLayout] = useState(LIST_LAYOUT);

    const toggleLayout = () => {
        if (layout === LIST_LAYOUT) {
            window.localStorage.setItem(LAYOUT_KEY, CARDS_LAYOUT);
            setLayout(CARDS_LAYOUT);
        } else {
            window.localStorage.setItem(LAYOUT_KEY, LIST_LAYOUT);
            setLayout(LIST_LAYOUT);
        }
    };

    useEffect(() => {
        const localLayout = window.localStorage.getItem(LAYOUT_KEY);
        if (localLayout) {
            setLayout(localLayout);
        }
    }, []);

    return [
        layout,
        toggleLayout,
    ];
};

export default useLayout;
