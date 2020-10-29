import { useState, useEffect, useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { SwitchContainer } from './style';
import { shade } from 'polished';

export default function ThemeSwitch({ onChangeAction }) {
    const { title, colors } = useContext(ThemeContext);

    return (
        <SwitchContainer>
            <Switch
                onChange={onChangeAction}
                checked={title === 'light' ? false : true}
                checkedIcon={false}
                uncheckedIcon={false}
                height={8}
                width={36}
                handleDiameter={18}
                offHandleColor={shade(0.1, colors.secondary)}
                offColor={colors.secondary}
                onHandleColor={shade(0.1, colors.secondary)}
                onColor={colors.secondary}
            />
        </SwitchContainer>
    );
}
