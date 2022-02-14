import input from "./inputReader"

declare type Options = {
    mask?: String = undefined;
    afterPrompt?: String = undefined;
    onAbort?: Function = ()=>{process.exit()};
    type?: 'text'|'string' = 'text';
    choices?: Array<String>;
    cursor?: String = '> ';
    defaultIndex?: Number = 0;
}

function input(prompt?: String, options?: Options): Promise<String>;

export = input;