module.exports = {
    env: {
        es2017: true,
        browser: false,
    },
    parserOptions: {
        ecmaFeatures: {
            impliedStrict: true,
        },
    },
    globals: {
        client: "readonly",
        server: "readonly",
        MinecraftDimension: "readonly",
        SendToMinecraftClient: "readonly",
        ReceiveFromMinecraftClient: "readonly",
        SendToMinecraftServer: "readonly",
        ReceiveFromMinecraftServer: "readonly",
        MinecraftComponent: "readonly",
        MinecraftParticleEffect: "readonly",
    },
}
