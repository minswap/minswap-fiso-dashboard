type Lib = typeof import('@emurgo/cardano-serialization-lib-browser');

class Module {
  _wasm: Lib | null = null;

  async load(): Promise<Lib> {
    if (!this._wasm) {
      this._wasm = await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib_bg');
    }
    return this._wasm;
  }

  async CardanoWasm(): Promise<Lib> {
    return this.load();
  }
}

export const RustModule: Module = new Module();
