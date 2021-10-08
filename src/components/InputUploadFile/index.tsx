import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useHistory } from 'react-router-dom';
import { Container, Reject, Accept, Active } from './styles';
import Loader from '../Loader';

function InputUploadFile(): JSX.Element {
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const onDrop = useCallback(async (acceptedFiles) => {
        try {
            setLoading(true);
            if (acceptedFiles.length > 1) {
                alert('error');
            }
            const data = new FormData();
            data.append('zipXML', acceptedFiles[0]);

            const response = await fetch('http://localhost:3333/upload', {
                method: 'POST',
                body: data,
            });
            const teste = await response.json();

            history.push({
                pathname: '/listxml',
                state: teste,
            });
        } catch (error) {
            console.log(error);
        } finally {
            console.log(loading);
            setLoading(false);
        }
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        onDrop,
        accept: 'application/x-zip-compressed',
    });

    return (
        <Container
            reject={isDragReject}
            success={isDragAccept}
            active={isDragActive}
        >
            <Loader loading={loading} />
            <p className="warning">
                - Permitido somente arquivos do tipo <strong>.zip!</strong>
            </p>
            <p className="warning">- Analise somente do XML NFC-e e NF-e!</p>

            <div className="inputContainer" {...getRootProps()}>
                <div className="InputCenter">
                    <input {...getInputProps()} />
                    {isDragReject && (
                        <Reject reject={isDragReject}>
                            Tipo de Arquivo inválido!
                        </Reject>
                    )}
                    {isDragAccept && (
                        <Accept success={isDragAccept}>Solte-o</Accept>
                    )}
                    {!isDragActive && (
                        <Active active={isDragActive}>
                            Arraste aqui ou clique!
                        </Active>
                    )}
                </div>
            </div>
        </Container>
    );
}

export default InputUploadFile;
