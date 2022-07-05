import React from 'react'
import UserCarosel from './userCarosel'
import UserFooter from './userFooter'
import UserHeader from './userHeader'
import UserHeaderSearchBar from './userHeaderSearchBar'
import UserProductCategory from './userProductCategory'

export default function UserdDashbord() {
  return (
    <div>
      <UserHeaderSearchBar />
      <UserHeader />
      <UserCarosel />
      <UserProductCategory/>
      <UserFooter/>
    </div>
  )
}