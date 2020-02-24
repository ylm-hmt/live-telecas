
require.config({
  paths: {
      "rtmp-streamer": "../utils/rtmp-streamer.min"
  }
});

require(["rtmp-streamer"], function (RtmpStreamer) {

  // const video = document.getElementById('video');
  const btn = document.getElementById('btn');
  const startLive = () =>{
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //   navigator.mediaDevices.getUserMedia({
    //     video: true,
    //   }).then((stream) => {
    //     console.log(stream)
    //     MediaStreamTrack = typeof stream.stop ==='function' ? stream : stream.getTracks()[0];
    //     video.srcObject = stream
    //     video.play();
    //     btn.innerText = '停止直播'
    //   }).catch((err) => {
    //       console.log(err);
    //       //调用摄像头失败给的提示
    //   });
    // } else {
    //   alert('不能唤起摄像头, 请检查设备')
    // }
    const streamer = new RtmpStreamer(document.getElementById('video'));
    streamer.publish('rtmp://localhost:1935/live', 'ylm');
    btn.innerText = '停止直播'
  }
  const endLive = () => {
    streamer.disconnect();
    btn.innerText = '开始直播'
  }
  btn.addEventListener('click', () => { 
    if (btn.innerText === '开始直播') {
      startLive();
    } else if (btn.innerText === '停止直播') {
      endLive();
    }
  })
});
