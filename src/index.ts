import Tokenizer from "./tokenizer";
import WasmModule from "./deployment/WasmModule";

let scripts = document.querySelectorAll<HTMLScriptElement>("script[type='text/lang']");

scripts.forEach((script: HTMLScriptElement): void => {
	const tokenizer = new Tokenizer({});
	
	tokenizer.tokenize(script.innerText);
	
	console.log(tokenizer.tokens);

	var module = new WasmModule();
});
