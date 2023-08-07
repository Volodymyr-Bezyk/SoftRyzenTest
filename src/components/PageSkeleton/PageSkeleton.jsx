import {
  PageSkeletonContent,
  PageSkeletonWrap,
  LayoutSkeletonWrap,
} from './PageSkeleton.styled';

const PageSkeleton = props => {
  const { layout = '' } = props;
  return layout ? (
    <LayoutSkeletonWrap
      viewBox="0 0 500 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <path d="M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z" />
      <ellipse cx="120" cy="140" rx="28" ry="28" />
    </LayoutSkeletonWrap>
  ) : (
    <PageSkeletonWrap>
      <PageSkeletonContent
        speed={2}
        viewBox="0 0 470 300"
        backgroundColor="#f3e7e7"
        foregroundColor="#c7cdea"
        {...props}
      >
        <rect x="12" y="35" rx="0" ry="0" width="6" height="246" />
        <rect x="14" y="34" rx="0" ry="0" width="408" height="6" />
        <rect x="416" y="34" rx="0" ry="0" width="6" height="246" />
        <rect x="12" y="276" rx="0" ry="0" width="408" height="6" />
        <rect x="36" y="67" rx="0" ry="0" width="151" height="137" />
        <rect x="37" y="211" rx="0" ry="0" width="47" height="36" />
        <rect x="87" y="211" rx="0" ry="0" width="47" height="36" />
        <rect x="138" y="211" rx="0" ry="0" width="47" height="36" />
        <circle cx="234" cy="96" r="28" />
        <rect x="278" y="79" rx="0" ry="0" width="124" height="9" />
        <rect x="279" y="99" rx="0" ry="0" width="125" height="8" />
        <rect x="222" y="140" rx="0" ry="0" width="188" height="11" />
        <rect x="222" y="167" rx="0" ry="0" width="188" height="11" />
        <rect x="218" y="207" rx="0" ry="0" width="69" height="28" />
        <rect x="298" y="208" rx="0" ry="0" width="71" height="27" />
        <circle cx="392" cy="221" r="14" />
      </PageSkeletonContent>
    </PageSkeletonWrap>
  );
};

export default PageSkeleton;
