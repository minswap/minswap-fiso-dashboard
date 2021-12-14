import * as React from 'react';

import { Layout } from 'src/components/Layout';

export default function DashboardPage(): React.ReactElement {
  return (
    <Layout>
      <div className="flex-1 w-full lg:w-auto">
        <div className="px-3 py-4 mx-5 bg-white divide-y shadow-md lg:mx-8 lg:py-6 lg:px-8 divide-secondary divide-opacity-10 rounded-3xl ">
          <div className="pb-3 lg:pb-5">
            <div className="text-xl font-bold">My FISO rewards</div>
            <div className="text-base opacity-60">
              We are pausing the claim system for maintainance, please follow our social media to get notified when the
              maintainance is finished.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
