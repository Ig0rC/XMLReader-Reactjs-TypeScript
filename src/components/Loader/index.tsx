import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay } from './styles';

interface LoaderProps {
    loading: boolean;
}

function Loader({ loading }: LoaderProps): JSX.Element | null {
    if (!loading) {
        return null;
    }

    return ReactDOM.createPortal(
        <Overlay>
            <div className="loader" />
        </Overlay>,
        document.getElementById('loader') as HTMLDivElement
    );
}

export default Loader;
