import * as React from 'react';
import { GetStaticPropsResult } from 'next';
import Image from 'next/image';

import { ExternallinkIcon } from 'src/components/icons';
import { Layout } from 'src/components/Layout';
import { Partner, PARTNERS } from 'src/data/partners';

type Props = {
  liveStake: Record<string, number>;
};

export default function DashboardPage({ liveStake }: Props): React.ReactElement {
  function formatLiveStake(s: number | undefined): string {
    if (s === undefined) {
      return '-';
    }
    return Math.floor(s).toLocaleString('en-US');
  }

  function compareFn(a: Partner, b: Partner): number {
    const x = liveStake[a.id];
    const y = liveStake[b.id];
    if (x === undefined || y === undefined) {
      return 0;
    }
    return x - y;
  }

  return (
    <Layout>
      <div className="flex-1">
        <div className="px-4 sm:px-8 flex sm:mx-5 flex-col mx-1 overflow-y-scroll bg-white divide-y shadow-xl max-h-[85vh]  divide-opacity-10 divide-secondary lg:ml-14 rounded-3xl">
          <div
            className={
              'sticky top-0 z-10 grid grid-flow-row grid-cols-1 pt-5 space-y-2 bg-white xl:space-y-0 xl:grid-cols-2 pb-7'
            }
          >
            <div className="flex flex-col">
              <div className="text-lg font-bold">Pools</div>
              <div className="hidden mt-2 text-base opacity-60 sm:block">FISO’s Liquidity Pools.</div>
            </div>
          </div>

          <table className="w-full text-sm sm:text-base">
            <tbody className="divide-y divide-opacity-10 divide-secondary">
              {PARTNERS.sort(compareFn).map((p) => (
                <tr key={p.ticker}>
                  <td className="flex py-5 pl-4 space-x-2 sm:pl-8">
                    <div className="pt-1">
                      <Image
                        alt={p.ticker}
                        className="rounded-full"
                        height={40}
                        src={p.logo ?? `https://unavatar.io/${p.twitter}`}
                        width={40}
                      />
                    </div>
                    <div className="flex items-center text-base font-medium sm:text-lg sm:px-3 whitespace-nowrap">
                      {p.ticker}
                    </div>
                  </td>

                  <td>
                    <div className="px-3 opacity-60 max-w-[1200px] m-0">{p.description}</div>
                  </td>

                  <td>
                    <div className="flex flex-col px-3">
                      <div className="opacity-60">Live Stake</div>
                      <div>{formatLiveStake(liveStake[p.id])}</div>
                    </div>
                  </td>

                  <td>
                    <div className="px-3">
                      <a
                        className="flex items-center text-lg gap-x-3 text-primary whitespace-nowrap"
                        href={p.url ?? `https://twitter.com/${p.twitter}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span>Learn more</span>
                        <ExternallinkIcon />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const apiKey = process.env['BLOCKFROST_API_KEY'];
  if (apiKey === undefined) {
    throw new Error('API Key not found');
  }

  type Response = {
    hex: string;
    live_stake: string;
  };

  const requests: Promise<Response>[] = PARTNERS.map((p) =>
    fetch(`https://cardano-mainnet.blockfrost.io/api/v0/pools/${p.id}`, {
      headers: {
        project_id: apiKey,
      },
    }).then((res) => res.json()),
  );

  const responses: Response[] = await Promise.all(requests);

  const liveStake: Record<string, number> = responses.reduce<Record<string, number>>((map, res) => {
    map[res.hex] = parseInt(res.live_stake, 10) / 1_000_000;
    return map;
  }, {});

  return {
    props: { liveStake },
    revalidate: 60, // Cache for 1 minute
  };
}
