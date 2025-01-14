import { Dispatch } from 'redux'
import {
  PlaceActionTypes,
  LOAD_COUNTRIES,
  LOAD_ADMINISTRATIVE_AREAS,
  LOAD_PLACE,
  SEARCH_PLACES,
  RESET_SEARCH_PLACES,
} from './actionTypes'
import * as api from './api'
import { Place } from './types'

export const loadCountriesAction = () => async (
  dispatch: Dispatch<PlaceActionTypes>
) => {
  const response = await api.getCountries()
  if (response.ok && response.data !== undefined) {
    dispatch({
      type: LOAD_COUNTRIES,
      payload: response.data,
    })
  } else if (response.status === 404) {
    throw new Error('Place not found')
  }
}

export const loadAdministrativeAreasAction = (parentPlaceId: string) => async (
  dispatch: Dispatch<PlaceActionTypes>
) => {
  const response = await api.getAdministrativeAreas(parentPlaceId)
  if (response.ok && response.data !== undefined) {
    // ammend the data with the parent place that was used in the query
    const ammendedData = response.data.map((p: Place) => ({
      ...p,
      parentPlaceId,
    }))

    dispatch({
      type: LOAD_ADMINISTRATIVE_AREAS,
      payload: { placeId: parentPlaceId, administrativeAreas: ammendedData },
    })
  } else if (response.status === 404) {
    throw new Error('Place not found')
  }
}

export const loadPlaceAction = (placeId: string) => async (
  dispatch: Dispatch<PlaceActionTypes>
) => {
  const response = await api.getPlace(placeId)
  if (response.ok && response.data !== undefined) {
    dispatch({
      type: LOAD_PLACE,
      payload: response.data,
    })
  } else if (response.status === 404) {
    throw new Error('Place not found')
  }
}

export const loadSearchPlacesAction = (
  searchTerm: string,
  page: number
) => async (dispatch: Dispatch<PlaceActionTypes>) => {
  if (page === 0) {
    dispatch({
      type: RESET_SEARCH_PLACES,
    })
  }
  const response = await api.searchPlaces(searchTerm, page)
  if (response.ok && response.data !== undefined) {
    dispatch({
      type: SEARCH_PLACES,
      payload: {
        places: response.data,
        hasMore: response.data && response.data.length >= api.PAGE_SIZE,
      },
    })
  } else {
    // dispatch({
    //   type: SOME_ERROR,
    // })
  }
}
