import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useReaderXML from '../../hooks/useReaderXML';
import formatDate from '../../utils/formatDate';
import { Card, Container } from './styles';
import Loader from '../../components/Loader';

function ListXML(): JSX.Element {
    const data = useLocation();
    const [xmls, verifyXML] = useReaderXML();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            if (data.state) {
                verifyXML(data.state as any[]);
            }
        })();
        setLoading(false);
    }, []);

    return (
        <Container>
            <Loader loading={loading} />
            {xmls.map((xml) => (
                <Card key={xml.key} protocol={xml.protocol}>
                    <header>
                        <p className="typeNF">
                            {xml.typeNF === '65' ? 'NFC-e' : 'NF-e'}
                        </p>

                        <p className="key">
                            Chave:
                            <strong> {xml.key.slice(3, xml.key.length)}</strong>
                        </p>
                        <p className="situation">
                            {xml.protocol === false
                                ? 'AUTORIZADO'
                                : 'SEM PROTOCOLO'}
                        </p>
                    </header>

                    <div className="info">
                        <div>
                            <p>
                                Série: <strong>{xml.serie}</strong>
                            </p>
                            <p>
                                Nr nota: <strong>{xml.numberNF}</strong>
                            </p>
                            <p>
                                Pagamento: <strong>{xml.typeNF}</strong>
                            </p>
                        </div>
                        <div className="bottom">
                            <p>
                                Dt de emissão:{' '}
                                <strong>{formatDate(xml.emissionDate)}</strong>
                            </p>
                            <p>
                                Dt de saída:{' '}
                                <strong>{formatDate(xml.exitDate)}</strong>
                            </p>
                            <p className="totalValue">
                                Total <strong>R$ {xml.total}</strong>
                            </p>
                        </div>
                    </div>
                </Card>
            ))}
        </Container>
    );
}

export default ListXML;
