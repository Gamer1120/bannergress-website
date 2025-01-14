import {
  BannerActionTypes,
  LOAD_BANNER,
  LOAD_RECENT_BANNERS,
} from './actionTypes'
import bannerReducer from './reducer'
import { BannerState } from './types'

describe('features > banner > bannerReducer', () => {
  it(`load banner, if ${LOAD_BANNER} action is provided`, () => {
    const initialState: BannerState = {
      banners: [],
      fullBanners: [],
      recentBanners: [],
      browsedBanners: [],
      searchBanners: [],
      agentBanners: [],
      userBannerListBanners: [],
      canBrowseMore: true,
      canSearchMore: true,
      hasMoreAgentBanners: true,
      hasMoreUserBannerListBanners: true,
      createdBanner: undefined,
      mapBanners: [],
    }

    const expectedState: BannerState = {
      banners: [
        {
          id: '1',
          title: 'Banner 1',
          numberOfMissions: 0,
          numberOfSubmittedMissions: 0,
          numberOfDisabledMissions: 0,
          startLatitude: 0,
          startLongitude: 0,
          lengthMeters: 0,
          formattedAddress: '',
          picture: '',
        },
      ],
      fullBanners: [],
      recentBanners: [],
      browsedBanners: [],
      searchBanners: [],
      agentBanners: [],
      userBannerListBanners: [],
      canBrowseMore: true,
      canSearchMore: true,
      hasMoreAgentBanners: true,
      hasMoreUserBannerListBanners: true,
      createdBanner: undefined,
      mapBanners: [],
    }

    const action: BannerActionTypes = {
      type: LOAD_BANNER,
      payload: {
        id: '1',
        title: 'Banner 1',
        numberOfMissions: 0,
        startLatitude: 0,
        startLongitude: 0,
        lengthMeters: 0,
        formattedAddress: '',
        picture: '',
      },
    }

    expect(bannerReducer(initialState, action)).toEqual(expectedState)
  })
  it(`load recent banners, if ${LOAD_RECENT_BANNERS} action is provided`, () => {
    const initialState: BannerState = {
      banners: [],
      fullBanners: [],
      recentBanners: [],
      browsedBanners: [],
      searchBanners: [],
      agentBanners: [],
      userBannerListBanners: [],
      canBrowseMore: true,
      canSearchMore: true,
      hasMoreAgentBanners: true,
      hasMoreUserBannerListBanners: true,
      createdBanner: undefined,
      mapBanners: [],
    }

    const expectedState: BannerState = {
      banners: [],
      fullBanners: [],
      recentBanners: [
        {
          id: '1',
          title: 'Banner 1',
          numberOfMissions: 0,
          numberOfDisabledMissions: 0,
          numberOfSubmittedMissions: 0,
          startLatitude: 0,
          startLongitude: 0,
          lengthMeters: 0,
          formattedAddress: '',
          picture: '',
        },
      ],
      browsedBanners: [],
      searchBanners: [],
      agentBanners: [],
      userBannerListBanners: [],
      canBrowseMore: true,
      canSearchMore: true,
      hasMoreAgentBanners: true,
      hasMoreUserBannerListBanners: true,
      createdBanner: undefined,
      mapBanners: [],
    }

    const action: BannerActionTypes = {
      type: LOAD_RECENT_BANNERS,
      payload: [
        {
          id: '1',
          title: 'Banner 1',
          numberOfMissions: 0,
          startLatitude: 0,
          startLongitude: 0,
          lengthMeters: 0,
          formattedAddress: '',
          picture: '',
        },
      ],
    }

    expect(bannerReducer(initialState, action)).toEqual(expectedState)
  })
})
