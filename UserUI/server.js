import Express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const app = Express()

app.use(Express.static('public'))
app.get('/', (req, res) => {
  res.send(ReactDOMServer.renderToString(
    <div>
      <div id="root"/>
      <script src="index.js"/>
    </div>
  ))
})// Launch server
app.listen(3000, () => {
  console.log('listening on port 3000!')
})
