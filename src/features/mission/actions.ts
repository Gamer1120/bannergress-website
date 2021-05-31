import { Dispatch } from 'redux'
import { ApiOrder, ApiOrderDirection } from '../banner/types'
import {
  MissionActionTypes,
  RESET_SEARCH_MISSIONS,
  SEARCH_MISSIONS,
} from './actionTypes'
import * as api from './api'

export const searchMissionsAction = (
  location: string | null,
  query: string,
  order: ApiOrder,
  orderDirection: ApiOrderDirection,
  page: number
) => async (dispatch: Dispatch<MissionActionTypes>) => {
  if (page === 0) {
    dispatch({
      type: RESET_SEARCH_MISSIONS,
    })
  }
  const response = await api.searchMissions(
    location,
    query,
    order,
    orderDirection,
    page
  )
  if (response.ok && response.data !== undefined) {
    dispatch({
      type: SEARCH_MISSIONS,
      payload: {
        missions: response.data,
        hasMore: response.data && response.data.length === api.PAGE_SIZE,
      },
    })
  } else if (!response.ok) {
    throw new Error('Error loading missions')
  }
}

export const resetSearchMissionsAction = () => (
  dispatch: Dispatch<MissionActionTypes>
) => dispatch({ type: RESET_SEARCH_MISSIONS })