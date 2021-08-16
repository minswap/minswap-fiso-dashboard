import * as React from 'react';
import Image from 'next/image';

import { Layout } from 'src/components/Layout';

export default function DashboardPage(): React.ReactElement {
  return (
    <Layout>
      <div className="mx-14 flex flex-col items-center gap-y-6 justify-center flex-1 h-[85vh] rounded-3xl">
        <Image alt="Coming soon" height="300" src="/construction.png" width="400" priority />
        <div className="text-4xl">Coming soon...</div>
      </div>
    </Layout>
  );
}
