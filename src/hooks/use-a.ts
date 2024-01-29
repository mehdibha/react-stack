import React from "react"

export const useUpdateUrlWithoutNavigation = (
  url: string
) => {
  React.useEffect(() => {
    window.history.replaceState(null, "", url)
  }, [url])
}