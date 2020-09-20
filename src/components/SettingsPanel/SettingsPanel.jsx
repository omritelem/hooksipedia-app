import React, { useEffect } from 'react';
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import useTheme from "../../hooks/useTheme";
import useLayout from "../../hooks/useLayout";
import { DARK_THEME, CARDS_LAYOUT } from '../../utils/constants';

import './SettingsPanel.scss';

const SettingsPanel = ({ show, setLayoutType }) => {
    const [theme, toggleTheme] = useTheme();
    const darkTheme = theme === DARK_THEME;

    const [layout, toggleLayout] = useLayout();
    const cardsLayout = layout === CARDS_LAYOUT;

    useEffect(() => {
        setLayoutType(layout);
    }, [layout, setLayoutType]);

    return (
        <div className={ classNames('settings-panel', { expanded: show }) }>
            <Grid container spacing={1} alignItems="center" justify="flex-start">
                <Grid item xs={4} className="label-name">
                    Theme
                </Grid>
                <Grid item xs={4}>
                    {darkTheme ? <Brightness3Icon className="settings-icons moon-icon" /> : <WbSunnyIcon className="settings-icons sun-icon" />}
                </Grid>
                <Grid item xs={4}>
                    <Switch
                        checked={darkTheme}
                        onChange={toggleTheme}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </Grid>
                <Grid item xs={4} className="label-name">
                    Layout
                </Grid>
                <Grid item xs={4}>
                    <div className={classNames("cards-container", { 'cards-layout': cardsLayout })}>
                        {Array.from(new Array(12), (_, index) => (<div key={index} className="card" />))}
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Switch
                        checked={cardsLayout}
                        onChange={toggleLayout}
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default SettingsPanel;
