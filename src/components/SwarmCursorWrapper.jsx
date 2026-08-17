'use client';
import dynamic from 'next/dynamic';

const SwarmCursor = dynamic(() => import('./SwarmCursor'), { ssr: false });

export default function SwarmCursorWrapper(props) {
  return <SwarmCursor {...props} />;
}
