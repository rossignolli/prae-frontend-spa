import styled, { css } from 'styled-components';

export const ContainerPreventive = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResumeEquipament = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserdivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 16px;
  }
`;

export const CardInfoHightlight = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;

    span {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }

    p {
      margin-top: ${theme.spacings.xxsmall};
      padding: ${theme.spacings.xsmall};
      border-radius: 15px;
      border: solid 2px ${theme.colors.backgroundBlue};
      width: 100%;
    }
  `}
`;

export const ContainerEquipaments = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.medium};
    flex-direction: column;
    margin: 16px;
    background-color: #ffffff;
    border-radius: 15px;
  `}
`;
export const Expiration = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.medium};
    flex-direction: column;
    margin: 16px;
    background-color: #ffffff;
    border-radius: 15px;
  `}
`;

export const HeaderEquipament = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
  `}
`;

export const GalleryEquipament = styled.div`
  ${({ theme }) => css`
    display: flex;
  `}
`;

export const EquipamentDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    max-width: 360px;
    padding: ${theme.spacings.xsmall};
    flex-direction: column;
  `}
`;

export const EquipamentTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const EquipamentDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.bodyText};
    font-weight: ${theme.font.normal};
  `}
`;

export const ResumeEquipamentList = styled.div`
  ${({ theme }) => css`
    background-color: red;
  `}
`;

export const ResumeInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xsmall};

    h1 {
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.heading};
    }
    span {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.bodyText};
    }
  `}
`;

export const CardEquipament = styled.div`
  ${({ theme }) => css`
    display: flex;
    border: 1px solid ${theme.colors.grayBorder};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    align-items: center;
    justify-content: center;
    margin ${theme.spacings.xxsmall};
    width: 100%;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

export const ResumeContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;

    button + button {
      padding: ${theme.spacings.xsmall};
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const ResumeActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    span {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;

export const HeaderTitle = styled.span`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.xsmall};

    color: ${theme.colors.bodyText};

    b {
      margin-left: ${theme.spacings.xsmall};
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }
  `}
`;
