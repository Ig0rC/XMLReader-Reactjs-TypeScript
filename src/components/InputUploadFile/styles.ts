import styled from 'styled-components';

interface iReject {
    reject: boolean;
}
interface iAccept {
    success: boolean;
}
interface iActive {
    active: boolean;
}
interface iContainer {
    active: boolean;
    success: boolean;
    reject: boolean;
}

export const Container = styled.div<iContainer>`
    margin-top: 162px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    .warning {
        font-size: 16px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.danger.dark};
    }

    .inputContainer {
        max-width: 500px;
        width: 100%;
        margin-top: 26px;
        padding: 20px;
        background-color: ${({ theme }) => theme.colors.primary.light};
        border: 2px dashed
            ${({ theme, success, active, reject }) => {
                if (reject) {
                    return theme.colors.danger.main;
                }
                if (success) {
                    return theme.colors.success.dark;
                }
                if (active === false) {
                    return theme.colors.primary.main;
                }
            }};
        border-radius: 6px;

        div {
            background-color: white !important;
            padding: 26px;
            border-radius: 6px;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const Reject = styled.p<iReject>`
    font-size: 16px;
    font-weight: 700;

    color: ${({ reject, theme }) => reject && theme.colors.danger.dark};
`;
export const Accept = styled.p<iAccept>`
    font-size: 16px;
    font-weight: 700;

    color: ${({ success, theme }) => success && theme.colors.success.main};
`;
export const Active = styled.p<iActive>`
    font-size: 16px;
    font-weight: 700;
`;
