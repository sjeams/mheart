<!-- 
<video width="100%"controls src="magnet:?xt=urn:btih:0A896722C6B55C6007CDB9B339BDF7E0ACA4F760&dn=Sintel"></video>
<script src="https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js" charset="utf-8" async></script> -->
<!-- <script src="/webtor/embed-sdk-js/dist/index.min.js" charset="utf-8" async></script> -->

<!-- <a href="magnet:?xt=urn:btih:0A896722C6B55C6007CDB9B339BDF7E0ACA4F760&dn=Sintel" download>Please make sure that JavaScript is enabled</a> -->
<!-- <div id="download" />
    <script>
        window.webtor = window.webtor || [];
        window.webtor.push({
            id: 'download',
            mode: 'download',
            magnet: 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F',
        });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js" charset="utf-8" async></script> -->

<!doctype html>
<html>
  <body>
  <a href="magnet:?xt=urn:btih:0A896722C6B55C6007CDB9B339BDF7E0ACA4F760" download="0A896722C6B55C6007CDB9B339BDF7E0ACA4F760.torrent">下载文件</a>
  <!-- https://api.magnet-vip.com/api2/download/08ada5a7a6183aae1e09d831df6748d566095a10 -->
<!-- magnet:?xt=urn:btih:22EBFF5F7B1AEDD4D77600183D79003A7BA88018 -->
    <form>
      <label for="torrentId">Download from a magnet link: </label>
      <input name="torrentId", placeholder="magnet:" value="https://abra--a2376523.api.frosty-night.buzz/0A896722C6B55C6007CDB9B339BDF7E0ACA4F760">
      <button type="submit">Download</button>
    </form>

    <h2>Log</h2>
    <div class="log"></div>

    <!-- Include the latest version of WebTorrent -->
    <script src="https://cdn.jsdelivr.net/npm/webtorrent@latest/webtorrent.min.js"></script>



    <script>

        // const client = new WebTorrent()
        // const magnetURI = 'magnet:?xt=urn:btih:AA876A4271802037EB77F5450ED95B7E1AA2EAAA'

        // client.add(magnetURI, function (torrent) {
        // // Got torrent metadata!
        // console.log('Client is downloading:', torrent.infoHash)

        // torrent.files.forEach(function (file) {
        //     // Display the file by appending it to the DOM. Supports video, audio, images, and
        //     // more. Specify a container element (CSS selector or reference to DOM node).
        //     file.appendTo('body')
        // })
        // })

      const client = new WebTorrent()

      client.on('error', function (err) {
        console.error('ERROR: ' + err.message)
      })

      document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault() // Prevent page refresh

        const torrentId = document.querySelector('form input[name=torrentId]').value
        log('Adding ' + torrentId)
        client.add(torrentId, onTorrent)
      })

      function onTorrent (torrent) {
        // const server = torrent.createServer()
        // server.listen(port) // start the server listening to a port

        // // visit http://localhost:<port>/ to see a list of files

        // // access individual files at http://localhost:<port>/<index> where index is the index
        // // in the torrent.files array

        // // later, cleanup...
        // server.close()
        // client.destroy()

        // log('Got torrent metadata!')
        // log(
        //   'Torrent info hash: ' + torrent.infoHash + ' ' +
        //   '<a href="' + torrent.magnetURI + '" target="_blank">[Magnet URI]</a> ' +
        //   '<a href="' + torrent.torrentFileBlobURL + '" target="_blank" download="' + torrent.name + '.torrent">[Download .torrent]</a>'
        // )

        // // Print out progress every 5 seconds
        // const interval = setInterval(function () {
        //   log('Progress: ' + (torrent.progress * 100).toFixed(1) + '%')
        // }, 5000)

        // torrent.on('done', function () {
        //   log('Progress: 100%')
        //   clearInterval(interval)
        // })
       
        const file = torrent.files.find(function (file) {
            return file.name.endsWith('.mp4')
        })
        file.appendTo('.log')
        // // Render all files into to the page
        // torrent.files.forEach(function (file) {
        //     // console.log(file)
        //   file.appendTo('.log')
        // //   log('(Blob URLs only work if the file is loaded from a server. "http//localhost" works. "file://" does not.)')
        //   file.getBlobURL(function (err, url) {
        //     if (err) return log(err.message)
        //     // log('File done.')
        //     // log('<a href="' + url + '">Download full file: ' + file.name + '</a>')
        //   })
        // })
      }

      function log (str) {
        const p = document.createElement('p')
        p.innerHTML = str
        document.querySelector('.log').appendChild(p)
      }
    </script>
  </body>
</html>