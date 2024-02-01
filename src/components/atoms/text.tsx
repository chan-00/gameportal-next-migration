import * as stylex from '@stylexjs/stylex';
import {ReactNode} from "react";

const styles = stylex.create({
    base: {
        fontSize: 16,
        lineHeight: 1.5,
        color: 'rgb(60,60,60)',
    },
    highlighted: {
        color: 'rebeccapurple',
    },
});

interface textType {
    children: ReactNode
}

const Text = ({children}: textType) => {

    return (
        <p {...stylex.props(styles.base)}>
            {children}
        </p>
    )
}

export { Text };