

class WasmModule{
	wasm : Uint8Array[] = WasmModule.createBufferSource([])
	constructor(){
	}
	private instantiate(){
        
        WebAssembly.instantiate(this.wasm, {env:{memory: new WebAssembly.Memory({ initial: 10 })}}).then((wasm)=>{
            console.log(wasm.instance);
        });
	}
	static createBufferSource(array: number[]): Uint8Array {
        const arrayBuffer = new ArrayBuffer(array.length);
        const data = new Uint8Array(array as unknown as ArrayBufferLike, arrayBuffer);
        return data;
    }
}

export default WasmModule;