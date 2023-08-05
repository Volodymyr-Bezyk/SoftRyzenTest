export const CardContainer =
styled.div` margin-top: 20px; display: flex; justify-content: center;`;

export const CustomCard = styled.div` padding: 32px; width: 712px; height:
350px; gap: 32px; border-radius: 4px 4px 0 0; box-shadow: 0 0 12px 4px rgba(0,
0, 0, 0.08);

@media only screen and (max-width: 559px) { width: 360px; gap: 48px; }

@media only screen and (max-width: 359px) { padding: 24px; } `;

export const CardRow = styled.div` display: flex; gap: 32px;

@media only screen and (max-width: 359px) { &:last-child { display: none
!important; } } `;

export const CardColumn = styled.div` flex: 1;`;

export const ComponentContainer = styled.div` margin-bottom: 20px;`;

export const Skeleton = styled.div` border-radius: 4px; opacity: 0.4;`;

export const SkeletonImage =
styled.div` display: flex; align-items: center; justify-content: center; height: 100%;`;

export const SkeletonBoxSmall = styled.div` width: 124px; height: 15px;`;

export const SkeletonBoxMedium = styled.div` width: 80px; height: 30px;

@media only screen and (max-width: 559px) { width: 100%; } `;

export const SkeletonBoxLarge = styled.div` width: 100%; height: 30px;`;

export const SkeletonBoxHalf = styled.div` width: 100%; height: 168px;`;

export const SkeletonContainer = styled.div` display: flex;`;

export const Top = styled.div` flex-direction: column; gap: 5px; margin-bottom:
20px;

@media only screen and (max-width: 359px) { margin-bottom: 68px; } `;

export const Bottom = styled.div` justify-content: flex-end; gap: 16px;

@media only screen and (max-width: 359px) { flex-direction: column; gap: 8px; }
`;

export const Icon =
styled.i` font-size: 63px; line-height: 54px; opacity: 0.2;`;

export const Header4 = styled.h4` opacity: 0.2; font-size: 20px;`;
