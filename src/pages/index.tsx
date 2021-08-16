import * as React from 'react';
import Image from 'next/image';
import { useQuery } from 'react-query';

import { ExternallinkIcon } from 'src/components/icons';
import { Layout } from 'src/components/Layout';

const partners = [
  {
    ticker: 'BLADE',
    description: 'We are 0% pool. Our mission is to deliver max returns to delegators.',
    twitter: 'conraddit',
  },
  {
    ticker: 'MALU',
    description:
      'Maluiin Pool is a charitable mission driven pool. It is a single pool, and a single operator pool.\nYou can find a lengthy description of my mission pinned to my twitter profile. It aims to bring free internet to mountainous tribes in West Papua. This will provide lifesaving and educational services.',
    twitter: 'cryptofly777',
  },
  {
    ticker: 'SWELL',
    description:
      'We are dedicated to offering reliable staking services at a low margin to support the Decentralization of Cardano.',
    twitter: 'SwellPool',
  },
  {
    ticker: 'AMOON',
    description:
      'We are single pool operator located in USA. We are part of Cardano Single Pool Alliance(CSPA). We are highly secure, reliable and cloud hosted with 2 relays, BP & Air Gapped machine for offline txns. We are in process of joining Cardano Mission Driven Pool Alliance to support Save the Children.',
    twitter: 'adamoonpool',
  },
  {
    ticker: 'ADAHS',
    description: 'The ADA house is all about securing and decentralizing the Cardano network',
    twitter: 'Bos020',
  },
  {
    ticker: 'BACK',
    description:
      "Back The Blockchain's Mission: https://docs.google.com/document/d/1-4dBTTuydF-eesubln_2UH7MPFSkr5SdqUDb9EQZnlo/edit?usp=sharing",
    twitter: 'BackBlockchain',
  },
  {
    ticker: 'GINGR',
    description:
      "I'm Eva Ginger and my goal is to provide value to Cardano and its community through different projects. I am co-author of a funded F4 PC proposal, I support different NFT projects (Yifu Pedersen, unsigned_algo), and I run the GINGR pool. My personal mission is my contribution!",
    twitter: 'eva__ginger',
  },
  {
    ticker: 'VAULT',
    description:
      'Bare-metal server pool with the aim of growing Cardano and keep it from be centralized on cloud servers.',
    twitter: 'StakeVault',
  },
  {
    ticker: 'DEGAS',
    description: 'Supporting emissions reduction and energy efficiency initiatives via donations and action',
    twitter: 'Degas_StakePool',
  },
  {
    ticker: 'RSV',
    description:
      'Reservoir Node runs on bare metal servers powered by off-the-grid solar installations. We have complete redundancy over two locations. We also run hosted relays in other countries.  ',
    twitter: 'RSVNODE',
  },
];

const partnersByTicker = partners.reduce<Record<string, true>>(
  (current, p) => ({ ...current, [p.ticker]: true }),
  {} as Record<string, true>,
);

export default function DashboardPage(): React.ReactElement {
  const result = useQuery({
    queryKey: 'pools-data',
    async queryFn() {
      const response = (await fetch('https://js.adapools.org/pools.json').then((res) => res.json())) as Record<
        string,
        { db_ticker: string; total_stake: string }
      >;
      return Object.values(response)
        .filter((res) => partnersByTicker[res.db_ticker.toUpperCase()])
        .reduce<Record<string, number>>(
          (current, res) => ({
            ...current,
            [res.db_ticker.toUpperCase()]: +res.total_stake / Math.pow(10, 6),
          }),
          {},
        );
    },
    refetchInterval: 1000 * 60, // 1 minute
    staleTime: 1000 * 60,
    refetchIntervalInBackground: true,
  });

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
              {partners.map((p) => (
                <tr key={p.ticker}>
                  <td className="flex py-5 pl-4 space-x-2 sm:pl-8">
                    <div className="pt-1">
                      <Image
                        alt={p.ticker}
                        className="rounded-full"
                        height={40}
                        src={`https://unavatar.io/${p.twitter}`}
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
                      {result.data ? <div>{result.data[p.ticker]}</div> : null}
                    </div>
                  </td>

                  <td>
                    <div className="px-3">
                      <a
                        className="flex items-center text-lg gap-x-3 text-primary whitespace-nowrap"
                        href={`https://twitter.com/${p.twitter}`}
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
