export function initialState () {
  return {
    abortSearch: false,
    activeComment: 0,
    comments: [],
    errorMessage: '',
    hasError: false,
    isRequesting: false,
    recordsSearched: 0,
    showForm: true,
    showResults: false,
    videoUrl: '',
    year: new Date().getFullYear()
  }
}
