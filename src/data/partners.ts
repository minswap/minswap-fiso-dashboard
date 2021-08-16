export interface Partner {
  id: string;
  ticker: string;
  description: string;
  twitter: string;
  logo?: StaticImageData;
  url?: string;
}

export const PARTNERS: Partner[] = [
  {
    id: 'd765dee553a7e041d525b1782a10eb0a5e52e96ed55ed173d8bb82a7',
    ticker: 'BLADE',
    description: 'We are 0% pool. Our mission is to deliver max returns to delegators.',
    twitter: 'conraddit',
  },
  {
    id: '38927599cc3ff6b081501e0ee1dc4f0cb8ba012b3de8b49a785bb05a',
    ticker: 'MALU',
    description:
      'Maluiin Pool is a charitable mission driven pool. It is a single pool, and a single operator pool.\nYou can find a lengthy description of my mission pinned to my twitter profile. It aims to bring free internet to mountainous tribes in West Papua. This will provide lifesaving and educational services.',
    twitter: 'MaluiinP',
  },
  {
    id: '7ff2b54f311b6774e82cbf780c413e49e37b7501afd30f154918f7ca',
    ticker: 'SWELL',
    description:
      'We are dedicated to offering reliable staking services at a low margin to support the Decentralization of Cardano.',
    twitter: 'SwellPool',
  },
  {
    id: '059b4217a24a8c67a363968ff1db13a17ed96e611362450c115b2415',
    ticker: 'AMOON',
    description:
      'We are single pool operator located in USA. We are part of Cardano Single Pool Alliance(CSPA). We are highly secure, reliable and cloud hosted with 2 relays, BP & Air Gapped machine for offline txns. We are in process of joining Cardano Mission Driven Pool Alliance to support Save the Children.',
    twitter: 'adamoonpool',
  },
  {
    id: '5201765589793cc9a04d8f378bc85125ec0ef7bf70beb84d01692c82',
    ticker: 'ADAHS',
    description: 'The ADA house is all about securing and decentralizing the Cardano network',
    twitter: 'Bos020',
  },
  {
    id: '36e67ea3d2c2f01682c592c62b161e022154c719bd8d75e7e80f51ac',
    ticker: 'BACK',
    description:
      "Back The Blockchain aims to be the world's leading blockchain and digital asset advocacy group. Our mission is to support decentralization, which we believe is the vehicle to economic opportunity and inclusion for everyone.",
    twitter: 'BackBlockchain',
  },
  {
    id: '1dc1e011d522a077a20b2659bd0ee257e0d80f105f5dc998d4cfda7c',
    ticker: 'GINGR',
    description:
      "I'm Eva Ginger and my goal is to provide value to Cardano and its community through different projects. I am co-author of a funded F4 PC proposal, I support different NFT projects (Yifu Pedersen, unsigned_algo), and I run the GINGR pool. My personal mission is my contribution!",
    twitter: 'eva__ginger',
  },
  {
    id: 'b52214d5c29ab51c3cf98b87142d736a738d9535e0b3646178316be6',
    ticker: 'VAULT',
    description:
      'Bare-metal server pool with the aim of growing Cardano and keep it from be centralized on cloud servers.',
    twitter: 'StakeVault',
  },
  {
    id: '4159a9cc7339bd2c495ad83239c2f1b97c8d2097eed6b120e08948c9',
    ticker: 'DEGAS',
    description: 'Supporting emissions reduction and energy efficiency initiatives via donations and action',
    twitter: 'Degas_StakePool',
  },
  {
    id: '1be0613ee44270f56b5fbb71f667528e1d877d77d349dd7324d50869',
    ticker: 'RSV',
    description:
      'Reservoir Node runs on bare metal servers powered by off-the-grid solar installations. We have complete redundancy over two locations. We also run hosted relays in other countries.  ',
    twitter: 'RSVNODE',
  },
];
