module.exports = {
  apps: [{
    name: "dummy_device",
    script: "./index.js",
    output: './logs/out.log',
    error: './logs/error.log',
    log: './logs/combined.outerr.log',
    merge_logs: true,
    instances: 1,
    watch: false,
    exec_mode: "cluster",
    autorestart : true,
    max_restarts: 1,
    env_development: {
      NODE_ENV: "development",
      PORT: 9997,
      SERVER_JWT_SECRET: "",
      SERVER_TIME_INTERVAL: 60000,
      SERVER_REQ_TIMEOUT: 10000,
      GATEWAY_URL: "http://vicinity-gateway-api:8181/api/",
      GATEWAY_ID: "ID",
      GATEWAY_PWD: "PWD",
      VAS_ROOTPATH: "/home/app/"

    },
    env_production: {
      NODE_ENV: "production"
    }
  }]
};
