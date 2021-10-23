import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { StyledTable } from '../StyledTable/styles';
import * as S from '../../pages/Equipaments/EquipamentList/styles';

interface EmptyTypes {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  buttonName: string;
}

export default function SkeletonDummy() {
  return (
    <>
      <S.ActionHolderContainer>
        <Skeleton duration={0.5} width={140} count={3} height={40} style={{ borderRadius: `15px`, marginRight: `10px` }} />
      </S.ActionHolderContainer>
      <StyledTable>
        <>
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
                <td>
                  <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
                </td>
              </tr>
            </tbody>
          </table>
          <section>
            <Skeleton duration={0.5} height={20} style={{ borderRadius: `15px` }} />
          </section>
        </>
      </StyledTable>
    </>
  );
}
