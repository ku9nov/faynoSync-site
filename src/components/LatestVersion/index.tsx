import React from 'react';

interface LatestVersionProps {
  fallbackVersion?: string;
  showPrefix?: boolean;
}

export default function LatestVersion({ 
  fallbackVersion = 'v0.0.0',
  showPrefix = true
}: LatestVersionProps): JSX.Element {
  const [version, setVersion] = React.useState(fallbackVersion);

  React.useEffect(() => {
    fetch('https://api.github.com/repos/ku9nov/faynoSync/releases/latest', {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    })
      .then(res => res.json())
      .then(data => {
        setVersion(data.tag_name || fallbackVersion);
      })
      .catch(() => {
        setVersion(fallbackVersion);
      });
  }, [fallbackVersion]);

  return (
    <span>
      {showPrefix ? version : version.replace('v', '')}
    </span>
  );
}
