const parseArgs = () => {
    const args = process.argv.slice(2);
    const argsString = args.reduce((string, arg, index) => {
        const isProperty = arg.startsWith("--");
        const isLastArg = index == args.length - 1;
        const argString = isProperty ? `${arg.substring(2)} is ` : arg;
        string += `${argString}${!isLastArg && !isProperty ? ", " : ""}`;
        return string;
    }, "");
    console.log(argsString);
};

parseArgs();
