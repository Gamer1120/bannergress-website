import React, { FC } from 'react'

import { Place } from '../../features/place'

import './place-entry.less'

const PlaceEntry: FC<PlaceProps> = ({ place, showNumbers, attribute }) => (
  <>
    {place.type === 'country' && (
      <>
        <span className="place-flag">
          {String.fromCodePoint.apply(
            undefined,
            Array.from(place.shortName).map(
              (c) => c.charCodeAt(0) + 0x1f1e6 - 0x41
            )
          )}
        </span>{' '}
      </>
    )}
    <span className="place-name" title={place[attribute]}>
      {place[attribute]}
    </span>

    {showNumbers && (
      <span className="place-number-of-banners">({place.numberOfBanners})</span>
    )}
  </>
)

export interface PlaceProps {
  place: Place
  showNumbers: boolean
  attribute: 'longName' | 'formattedAddress'
}

export default PlaceEntry