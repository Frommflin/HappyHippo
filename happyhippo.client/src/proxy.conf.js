const PROXY_CONFIG = [
  {
    context: [
      "/happyhippouser",
    ],
    target: "https://localhost:7084",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
