const NodeMediaServer = require('node-media-server');
const config = {
  rtmp: { // 推流地址
    port: 1935, 
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: { // 播流地址
    port: 8090,
    allow_origin: '*'
  }
};
 
var nms = new NodeMediaServer(config)
nms.run();