import { Suspense } from 'react'
import Banner from './Banner'
import HotJobs from './HotJobs'

const Home = () => {

  // const jobpromise = fetch('http://localhost:3000/jobs').then(res=>res.json());

  return (
    <div>
      <Banner />
      {/* <HotJobs jobpromise={jobpromise}/> */}
      <Suspense fallback={'Loading Hot Jobs...'}>
        <HotJobs />
      </Suspense>
    </div>
  )
}

export default Home