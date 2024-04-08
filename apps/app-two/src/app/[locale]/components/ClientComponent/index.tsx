'use client';

import { useState } from 'react';

export default function Expandable({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  function onToggle() {
    setExpanded(!expanded);
  }

  return (
    <div style={{ marginBottom: 25 }}>
      <button onClick={onToggle}>{title}</button>
      {expanded && <div>{children}</div>}
    </div>
  );
}
