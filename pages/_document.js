import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="tw">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="Content-Language" content="zh-tw" />
          <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.9.2/antd.css" />
        </Head>
        <body lang="zh-tw">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
