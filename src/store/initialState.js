export function initialState () {
  return {
    abortSearch: false,
    activeHaiku: 0,
    haiku: [],
    errorMessage: '',
    formInput: '',
    hasError: false,
    isFetchingHaiku: false,
    isFetchingVideos: false,
    nextPageToken: '',
    recordsSearched: 0,
    showForm: true,
    showHaiku: false,
    showVideos: false,
    videos: [],
    year: new Date().getFullYear()
  }
}
