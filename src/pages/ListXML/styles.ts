import styled, { css } from 'styled-components';

interface iCard {
    protocol: boolean;
}

export const Container = styled.section`
    margin-top: 80px;
    width: 100%;
`;

export const Card = styled.div<iCard>`
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border: 4px solid #ffffff;
    margin-bottom: 10px;

    p {
        background-color: #dfeeff;
        font-weight: bold;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.primary.main};
        border-radius: 18px;
    }

    strong {
        color: black !important;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0px 28px 16px 28px;

        p {
            margin-top: 16px;
        }

        .typeNF {
            border-radius: 50% !important;
            height: 52px;
            width: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .key {
            padding: 6px;
        }

        .situation {
            padding: 6px;
            background-color: ${({ theme, protocol }) =>
                protocol === false ? '#1bef56' : theme.colors.danger.main};
            color: ${({ protocol, theme }) =>
                protocol === false
                    ? theme.colors.primary.main
                    : 'white'} !important;
            max-width: 118px;
            width: 100%;
            text-align: center;
        }
    }

    .info {
        div {
            p {
                padding: 6px;
            }

            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0px 28px 16px 28px;
        }
        .bottom {
            p {
                margin-bottom: 16px !important;
            }

            .totalValue {
                border: 2px solid #fd0503;
            }
        }
    }

    ${({ protocol, theme }) =>
        protocol &&
        css`
            border-color: ${theme.colors.danger.main} !important;
        `}
`;
