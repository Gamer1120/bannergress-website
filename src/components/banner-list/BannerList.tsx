import React, { FC, useEffect, useRef } from 'react'
import { Row } from 'antd'
import { Link, generatePath } from 'react-router-dom'
import { Trans } from 'react-i18next'

import { Banner } from '../../features/banner'
import { useInfiniteScroll } from '../../hooks/InfiniteScroll'
import BannerCard from '../banner-card'

import './banner-list.less'

const BannerList: FC<BannerListProps> = ({
  banners,
  hasMoreBanners,
  loadMoreBanners,
  selectedBannerId,
  onSelectBanner,
  applyBannerListStlyes,
  hideBlacklisted,
  showDetailsButton,
}) => {
  const itemsRef = useRef<Array<HTMLDivElement | null>>([])
  const [ref] = useInfiniteScroll({
    callback: loadMoreBanners,
  })

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, banners?.length || 0)
  }, [banners])

  useEffect(() => {
    const index = banners?.findIndex((b) => b.id === selectedBannerId)
    if (index !== undefined && index >= 0 && itemsRef.current[index]) {
      itemsRef.current[index]!.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [banners, selectedBannerId])

  const getBannerCardWithLink = (banner: Banner, contents: JSX.Element) =>
    onSelectBanner ? (
      <div
        key={banner.id}
        role="button"
        title={banner.title}
        onClick={() => onSelectBanner(banner)}
        onKeyPress={(e) => e.key === 'Enter' && onSelectBanner(banner)}
        className="banner-card-link"
        tabIndex={0}
      >
        {contents}
      </div>
    ) : (
      <Link
        key={banner.id}
        to={generatePath('/banner/:id', { id: banner.id })}
        title={banner.title}
      >
        {contents}
      </Link>
    )

  if (banners && banners.length > 0) {
    return (
      <>
        <div className="banner-list">
          {banners?.map((banner, index) => {
            if (hideBlacklisted && banner?.listType === 'blacklist') {
              return null
            }

            const bannerCard = getBannerCardWithLink(
              banner,
              <BannerCard
                key={banner.id}
                banner={banner}
                selected={banner.id === selectedBannerId}
                detailsUrl={
                  showDetailsButton
                    ? generatePath('/banner/:id', { id: banner.id })
                    : undefined
                }
                linkStartPlace={false}
                applyBannerListStlye={applyBannerListStlyes}
              />
            )
            return (
              <div
                className="banner-list-entry"
                key={banner.id}
                ref={(b) => {
                  itemsRef.current[index] = b
                }}
              >
                {bannerCard}
              </div>
            )
          })}
          {hasMoreBanners && (
            <div ref={ref} className="banner-card">
              <Trans i18nKey="loadingMore">Loading more items...</Trans>
            </div>
          )}
        </div>
      </>
    )
  }
  return (
    <>
      {hasMoreBanners && (
        <Row>
          <Trans i18nKey="loading">Loading...</Trans>
        </Row>
      )}
    </>
  )
}

export interface BannerListProps {
  banners: Array<Banner> | undefined
  hasMoreBanners: Boolean
  selectedBannerId?: string
  loadMoreBanners?: () => Promise<void>
  onSelectBanner?: (banner: Banner) => void
  applyBannerListStlyes: boolean
  hideBlacklisted: boolean
  showDetailsButton: boolean
}

export default BannerList
