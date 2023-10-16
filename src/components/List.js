import React, { useEffect } from "react"
import { fetchMorePhotos } from "../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import { fetchPhotos } from "../api"
import { setPhotos } from "../redux/reducers/app"

const List = () => {
  const dispatch = useDispatch()
  const photos = useSelector((state) => state.app.list)
  const perPage = 30
  const page = Math.ceil(photos.length / perPage) + 1

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    const scrollHeight = document.documentElement.scrollHeight
    if (scrollTop + clientHeight >= scrollHeight) {
      dispatch(fetchMorePhotos(perPage, page + 1))
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    fetchPhotos({ perPage, page }).then((data) => {
      dispatch(setPhotos(data.images))
    })
  }, [dispatch, perPage, page])

  return (
    <div className="grid grid-cols-3 p-10 border items-center gap-20 border-red-500 min-h-[90vh] w-full">
      {photos.map((photo) => (
        <div key={photo.id}>
          <img className="h-full w-full" src={photo.urls.small_s3} alt="" />
          <p className="text-center">{photo.user.username}</p>
        </div>
      ))}
    </div>
  )
}

export default List
