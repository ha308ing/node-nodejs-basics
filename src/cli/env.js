const envPrefix = "RSS_";
const joinSeparator = "; ";

const parseEnv = () => {
    const variablesString = Object.entries(process.env)
        .filter(([key]) => key.startsWith(envPrefix))
        .map(([key, value]) => `${key}=${value}`)
        .join(joinSeparator);

    console.log(variablesString);
};

parseEnv();
