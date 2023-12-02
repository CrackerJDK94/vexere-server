let serverInfo = {};

function saveServerInfo(server) {
  serverInfo = server;
}
function getServerInfo() {
  return serverInfo;
}

module.exports = {
  saveServerInfo,
  getServerInfo,
};

