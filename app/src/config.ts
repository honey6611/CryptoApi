interface Iconfig {
    PORT: string | number ;
}

const config: Iconfig = {
    PORT: process.env.PORT || 3000
};

export { config };