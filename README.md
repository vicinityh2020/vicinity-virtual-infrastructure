# VICINITY Virtual infrastructure set-up
This repository enable to create build simple docker compose including instance of VICINITY Gateway API and VICINITY Dummy Device container. The latter is used register simulated devices and generate properties values.
## Installation
Install `git`, `docker`, `docker-compose` on your host. Afterwards clone the repository.
```
git clone https://github.com/vicinityh2020/vicinity-virtual-infrastructure.git
```

### Configuration

In repository root directory, configure your Gateway api ID and password in `vas.config.js`.

### Start
In repository root directory fire up docker compose.
``` docker-compose up ```
For the detached mode run ``` docker-compose up -d ```

### Stop
To stop both containers: `docker-compose down`.

### Restarting
Restarting the docker-compose will not reregister simulated device in VICINITY. If you need to register device again you need to modify `agent/agent.json` file. It include the array of json object, where each object represents registered device. If you remove `oid` and `pwd` fields from the object it will be registered again. Note, repetitive registration of the same object the new device will be created (5 registration => 5 devices).
