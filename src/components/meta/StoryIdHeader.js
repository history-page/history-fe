import React from 'react'
import Head from 'next/head'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const { PRODUCT_NAME, PRODUCT_AUTHOR, PRODUCT_HOST = '', FACEBOOK_APP_ID } = publicRuntimeConfig

const stringifyArrayObj = (list, field) => {
  return list.map(item => item[field]).join(',')
}

export default ({ storyData }) => {
  const { name, description, categorys, author, coverUrl } = storyData

  const tagContentCategory = stringifyArrayObj(categorys, 'name')
  const tagContentAuthor = author.name

  return (
    <Head>
      <title>{name}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${tagContentCategory},${tagContentAuthor},${name}`} />
      <meta name="author" content={PRODUCT_AUTHOR || ''} />
      <meta name="copyright" content={PRODUCT_NAME || ''} />

      {/* <!-- Schema.org markup for Google+ --> */}
      <meta itemprop="name" content={name} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={coverUrl} />

      {/* <!-- Twitter Card data --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={PRODUCT_NAME} />
      <meta name="twitter:title" content={name} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={PRODUCT_AUTHOR} />
      <meta name="twitter:image" content={coverUrl} />
      <meta name="twitter:data1" content="$3" />
      <meta name="twitter:label1" content="Price" />
      <meta name="twitter:data2" content="Black" />
      <meta name="twitter:label2" content="Color" />

      {/* <!-- Open Graph data facebook --> */}
      <meta property="og:title" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={PRODUCT_HOST} />
      <meta property="og:image" content={coverUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={PRODUCT_NAME} />
      <meta property="og:locale" content="zh_TW" />
      <meta property="fb:app_id" content={FACEBOOK_APP_ID} />
    </Head>
  )
}
