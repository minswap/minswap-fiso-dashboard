import { RustModule } from '../rust-module';

export async function paymentAddrToStakeAddr(paymentAddrBech32: string): Promise<string> {
  const Cardano = await RustModule.CardanoWasm();
  const paymentAddress = Cardano.BaseAddress.from_address(Cardano.Address.from_bech32(paymentAddrBech32));
  if (paymentAddress === undefined) {
    throw new Error(`Fail to parse bech32 base address: ${paymentAddrBech32}`);
  }
  const stakeKey = paymentAddress.stake_cred();
  const stakeAddress = Cardano.RewardAddress.new(Cardano.NetworkInfo.mainnet().network_id(), stakeKey)
    .to_address()
    .to_bech32();

  paymentAddress.free();
  stakeKey.free();

  return stakeAddress;
}
