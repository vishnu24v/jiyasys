'use client';

import Link from 'next/link';
import RollingText from './RollingText';

interface RollingLinkProps {
  text: string;
  href: string;
  className?: string;
}

export default function RollingLink({ text, href, className = "" }: RollingLinkProps) {
  return (
    <Link href={href} className={`relative overflow-hidden group inline-block ${className}`}>
      <RollingText text={text} />
    </Link>
  );
}
