import { PageSkeletonWrap } from './PageSkeleton.styled';

const PageSkeleton = props => {
  return (
    <PageSkeletonWrap
      viewBox="0 0 850 600"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
      {...props}
    >
      <rect x="0" y="50" rx="10" ry="10" width="100%" height="580" />
    </PageSkeletonWrap>
  );
};

export default PageSkeleton;
