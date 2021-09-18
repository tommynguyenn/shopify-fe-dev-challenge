import React from 'react';
import { Skeleton } from '@material-ui/lab';

export default function PhotoCardSkeleton() {
  const numSkeletons = 12;

  const renderSkeleton = () => {
    const skeleton = [];
    for (let i = 0; i < numSkeletons; i++) {
      skeleton.push(<Skeleton variant="rect" key={i} />);
    }
    return skeleton;
  };

  return (
    <React.Fragment>
      { renderSkeleton().map(s => s) }
    </React.Fragment>
  );
}
