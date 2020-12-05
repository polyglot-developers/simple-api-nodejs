          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: load.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 6m0s max duration (incl. graceful stop):
           * default: Up to 10 looping VUs for 5m30s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


running (5m30.1s), 00/10 VUs, 87362 complete and 0 interrupted iterations
default ✓ [======================================] 00/10 VUs  5m30s

    ✓ is status 200

    checks.....................: 100.00% ✓ 87362 ✗ 0   
    data_received..............: 30 MB   90 kB/s
    data_sent..................: 7.4 MB  22 kB/s
    http_req_blocked...........: avg=5.03µs  min=1µs    med=4µs     max=3.33ms p(90)=7µs     p(95)=8µs    
    http_req_connecting........: avg=87ns    min=0s     med=0s      max=1.29ms p(90)=0s      p(95)=0s     
    http_req_duration..........: avg=28.82ms min=2.49ms med=25.17ms max=1.03s  p(90)=46.28ms p(95)=58.95ms
    http_req_receiving.........: avg=88.88µs min=16µs   med=82µs    max=4.78ms p(90)=110µs   p(95)=127µs  
    http_req_sending...........: avg=26.17µs min=6µs    med=24µs    max=5ms    p(90)=33µs    p(95)=36µs   
    http_req_tls_handshaking...: avg=0s      min=0s     med=0s      max=0s     p(90)=0s      p(95)=0s     
    http_req_waiting...........: avg=28.7ms  min=2.4ms  med=25.06ms max=1.03s  p(90)=46.15ms p(95)=58.84ms
    http_reqs..................: 87362   264.673884/s
    iteration_duration.........: avg=29ms    min=2.66ms med=25.35ms max=1.03s  p(90)=46.47ms p(95)=59.12ms
    iterations.................: 87362   264.673884/s
    vus........................: 1       min=1   max=10
    vus_max....................: 10      min=10  max=10