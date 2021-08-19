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
      'Maluiin Pool is a charitable mission driven pool. It is a single pool, and a single operator pool. You can find a lengthy description of my mission pinned to my twitter profile. It aims to bring free internet to mountainous tribes in West Papua. This will provide lifesaving and educational services.',
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
      'We are single pool operator located in USA. We are part of Cardano Single Pool Alliance (CSPA). We are highly secure, reliable and cloud hosted with 2 relays, BP & Air Gapped machine for offline txns. We are in process of joining Cardano Mission Driven Pool Alliance to support Save the Children.',
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
      "I'm Eva Ginger and my goal is to provide value to Cardano and its community through different projects. I am co-author of a funded F4 PC proposal, support different NFT projects (unsigned_algo, Yifu Pedersen), build up a DAO, and I run the GINGR pool. My personal mission is my contribution!",
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
      'Reservoir Node runs on bare metal servers powered by off-the-grid solar installations. We have complete redundancy over two locations. We also run hosted relays in other countries.',
    twitter: 'RSVNODE',
  },
  {
    id: 'b4122e4d02a6986e9604d5c74ab2974e80638f78e6bd1aa01b883e6e',
    ticker: 'EUSKL',
    description:
      "We are the 1st Basque Country's Cardano Stake Pool! Our Mission is simple: Cardano Mission! We also are proud members of Cardano Single Pool Alliance (CSPA) and we are a 0% margin fee pool, powered and maintained by IT professionals.",
    twitter: 'euskalstakepool',
  },
  {
    id: 'eeb180952144eaf1aa5ff27a19322a5560e027ca1510bae10ec2e76a',
    ticker: 'SOLIA',
    description: "Let's reforest Amazonia with us !",
    twitter: 'PoolSolia',
  },
  {
    id: 'ad7672d51077091866aff6fb43f9f3b75d427c961f6de8a135b07219',
    ticker: 'ACI',
    description:
      'Single bare metal pool whose owners are activly working on Cardano dapp development and Cardano comunity. Here from the ITN, strugling with empty blocks.',
    twitter: 'marin1602',
  },
  {
    id: '827c7aa359964ec100a9a3b943c73c1dd2056725b8897fd744c8adc0',
    ticker: 'NOVA',
    description:
      'The mission of NOVA Pool Germanys is to add value to the Cardano network by providing the German and English speaking Cardano community with educational videos about Cardano and digital artwork. So that knowledge and passion is shared with the new and existing Cardano users.',
    twitter: 'NOVA_Pool',
  },
  {
    id: 'c2b8bff5160dd75149f2cae0955698550e8cf0d390025b26a9508a3e',
    ticker: 'QCPOL',
    description:
      'We’re two friends running a pool on bare-metal servers hosted in Québec. We want to build a community around Cardano for Quebecers (so mainly French stuff). We love poutine!',
    twitter: 'QCPOLstakepool',
  },
  {
    id: 'eb6e1949ef2e1f2cdb9b041d2a4b86d4d837798ab3ddfe53cc4cafe4',
    ticker: 'ADATA',
    description:
      'Promote the Cardano community providing analytics services. Our pool analytics API is a free of charge service available to the SPO and Cardanians ',
    twitter: 'ADApoolData',
  },
  {
    id: 'b2d1c479ce496d5be21cb68e95dae7342937c631488c47161d408f39',
    ticker: 'TREE',
    description:
      "AdaTree has been operating since the beginning of Shelley and produced the first block in epoch 212 with a total of 152 blocks to date at 5.66% lifetime ROA. We've also donated well over 2000 ADA total to websites that supports Cardano (pool.pm, Cardanoscan, Adapools, Pooltool) and our delegators.",
    twitter: 'ADATreePool',
  },
  {
    id: '76e80e1b3f622c7051f222453497b0667e12892f5d94ee565d17dc52',
    ticker: 'EU01',
    description: 'Help other Stake Pool Operators to launch their pool by providing training and support',
    twitter: 'StakePool247',
  },
  {
    id: '38d44f2bbccd27b654e532e6937e3a60b900168082f5c1b4fe236974',
    ticker: 'ALPCH',
    description:
      'Alpen Cardano try to improve our nature with focus in the mountains. Our mission is contribute with organisations that prevent the destruction of the environment.',
    twitter: 'Mikelalpch',
  },
  {
    id: '91991d9238f3f270a46fc237acc3abcdf2456ff163c1639951d75d15',
    ticker: 'COINZ',
    description:
      'Professional run pool by Cloud Solutions architect, security is top of mind. I donate 10% to a charity when we mint a block, currently focused on the American Cancer Society. I am passionate about teaching and being an example, Cardano is making that more possible.',
    twitter: 'adacoinz',
  },
  {
    id: '29df06255834d24d6a149224cf114a371bea08b64e7537e224a561a5',
    ticker: 'HYPE',
    description: 'Our mission is to contribuinte to the Cardano Network.',
    twitter: 'HypeStaking',
  },
  {
    id: '9dcb2a0398835a6b0a71dd5bbaa0d6bb961276aedd72f2655c7879d0',
    ticker: 'FUNGI',
    description:
      'Fungi Pool is a  0% margin, single-operator stake pool with a mission. We donate 10% of our SPO rewards to research initiatives and organizations that utilize fungi in innovative and exciting ways to help heal mankind and the Earth at large.  Fungi Pool is powered by zero-emission renewable energy and is the founder of the Cardano Renewable Energy Stake Pool Alliance (CRESPA). Stake with Fungi, earn rewards, and support the mushroom movement!',
    twitter: 'fungipool',
  },
  {
    id: '6e244c629b648b065ca4854ea7f8fb9838be54f688a5ee005074bdba',
    ticker: 'JUST',
    description:
      'JUST pool is based in Australia for better decentralisation and active in Project Catalyst and Plutus Pioneers program (under different names). We have been involved since the start of the ITN and planning to build and educate on Cardano, once we complete the Plutus course. Cheers.',
    twitter: 'JustStakingADA',
  },
  {
    id: '381ad61d5031c2a570c268d2f018bfb65c6eb7e32e535a58384f9a21',
    ticker: 'ALFA',
    description:
      'Alfa Pool is a professional operated high performance Baremetal Node with cloud Relays. We support ADA decentralization. New pool registered on epoch 271, we plan to donate at Greek charity organisations and other various projects once we establish enough staking to mint at least 1 block per epoch.',
    twitter: 'AlfaCardanoPool',
  },
  {
    id: '96553a437b99271fdcaa30c279e432224342e88147741db73872f03c',
    ticker: 'YOADA',
    description:
      'We hare here for a better decentralization of cardano and having 0% margin to let our delegators get the most rewards.',
    twitter: 'YoadaStakepool',
  },
];
