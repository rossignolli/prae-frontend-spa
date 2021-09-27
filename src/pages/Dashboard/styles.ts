import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const EquipamentsContainer = styled.div`
  ${({ theme }) => css`
    grid-area: Resume-Equipaments;
    padding: ${theme.spacings.xsmall};
  `}
`;

export const TitleSection = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.heading};
    margin-bottom: ${theme.spacings.xsmall};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const SubTitleSection = styled.span`
  ${({ theme }) => css`
      color: ${theme.colors.bodyText};
      font-size: ${theme.font.sizes.small};
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`;

export const DataCardsContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    grid-area: Chart;
  `}
`;

export const DataCardsInsideContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    ${media.lessThan('medium')`
  flex-wrap: wrap;
  `}
  `}
`;

export const ChartContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    max-width: 580px;
  `}
`;

export const ContainerDash = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 20px 20px;
    grid-template-areas: 'Resume-Equipaments Chart';
    ${media.lessThan('medium')`
    grid-template-columns: 1fr ;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'Resume-Equipaments'
      'Chart '
      'Chart';
  `};
  `}
`;
