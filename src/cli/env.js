const parseEnv = () => {
    const entriesPrefix = "RSS_";
    const entriesSep = "; ";

    const vars = process.env;
    const varEntries = Object.entries(vars);

    const entries = varEntries.filter(([key]) => key.startsWith(entriesPrefix));
    const entriesString = entries
        .map(([key, value]) => `${key}=${value}`)
        .join(entriesSep);

    console.log(entriesString);
};

parseEnv();
