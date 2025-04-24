const ARGS_START_INDEX = 2;
const args = process.argv.slice(ARGS_START_INDEX);

const propNameRegex = /^-{1,2}/;
const outputStringSeparator = ", ";

const parseArgs = () => {
    let ouputString = "";
    let isPropSet = false;

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (propNameRegex.test(arg)) {
            ouputString += isPropSet
                ? ` is true`
                : arg.replace(propNameRegex, "");
        } else {
            ouputString += ` is ${arg}`;

            if (i < args.length - 1) {
                ouputString += outputStringSeparator;
            }
        }

        isPropSet = !isPropSet;
    }

    console.log(ouputString);
};

parseArgs();
