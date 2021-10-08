import { useState } from 'react';

interface iXMLProtocol {
    typeNF: string;
    key: string;
    serie: string;
    numberNF: string;
    emissionDate: Date;
    exitDate: Date;
    total: number;
    protocol: boolean;
}

type tUseReaderXML = [
    xml: iXMLProtocol[],
    verifyXML: (xml: iXMLProtocol[]) => void
];

function useReaderXML(): tUseReaderXML {
    const [xmlProtocol, setXMLProtocl] = useState<iXMLProtocol[]>([]);

    function verifyXML(xmls: any[]): void {
        for (let i = 0; i <= xmls.length; i += 1) {
            if (xmls[i]?.nfeProc) {
                setXMLProtocl((prevState) => [
                    ...prevState,
                    {
                        typeNF: xmls[i].nfeProc.NFe[0].infNFe[0].ide[0].mod[0],
                        numberNF:
                            xmls[i].nfeProc.NFe[0].infNFe[0].ide[0].nNF[0],
                        emissionDate: new Date(
                            xmls[i].nfeProc.NFe[0].infNFe[0].ide[0].dhEmi[0]
                        ),
                        exitDate: new Date(
                            xmls[i].nfeProc.NFe[0].infNFe[0].ide[0].dhEmi[0]
                        ),
                        key: xmls[i].nfeProc.NFe[0].infNFe[0].$.Id,
                        serie: xmls[i].nfeProc.NFe[0].infNFe[0].ide[0].serie[0],
                        total: xmls[i].nfeProc.NFe[0].infNFe[0].total[0]
                            .ICMSTot[0].vNF[0],
                        protocol: false,
                    },
                ]);
            }

            if (xmls[i]?.NFe) {
                console.log(xmls[i].NFe);
                setXMLProtocl((prevState) => [
                    ...prevState,
                    {
                        typeNF: xmls[i]?.NFe.infNFe[0].ide[0].mod[0],
                        numberNF: xmls[i]?.NFe.infNFe[0].ide[0].nNF[0],
                        emissionDate: new Date(
                            xmls[i]?.NFe.infNFe[0].ide[0].dhEmi[0]
                        ),
                        exitDate: new Date(
                            xmls[i]?.NFe.infNFe[0].ide[0].dhEmi[0]
                        ),
                        key: xmls[i]?.NFe.infNFe[0].$.Id,
                        serie: xmls[i]?.NFe.infNFe[0].ide[0].serie[0],
                        total: xmls[i]?.NFe.infNFe[0].total[0].ICMSTot[0]
                            .vNF[0],
                        protocol: true,
                    },
                ]);
            }
        }
    }

    return [xmlProtocol, verifyXML];
}

export default useReaderXML;
