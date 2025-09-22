import React, { Suspense } from 'react'
import ApplicationStats from './ApplicationStats'
import ApplicationList from './ApplicationList'
import { myApplicationPromise } from '../api/ApplicationApi'
import UseAuth from '../Hooks/UseAuth'

const MyApplications = () => {
  const {user} = UseAuth();
  return (
    <div className='px-[8%]'>
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={'Loading your Applicaions'}>
        <ApplicationList
          myApplicationPromise={myApplicationPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  )
}

export default MyApplications