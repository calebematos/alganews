import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default"

import PostList from "../features/PostList.feature";
import UserPerformance from "../features/UserPerformance.feature";
import UserTopTags from "../features/UserTopTags.feature";
import UserEarnings from "../features/UserEarnings.feature";
import ErrorBoundary from "../components/ErrorBoundary";


export default function Home() {
  usePageTitle("Home")

  return <DefaultLayout>
    <ErrorBoundary>
      <div style={{ display:'grid', gridTemplateColumns: '1fr 1fr', alignItems:'center', gap:'32px'}}> 
        <UserTopTags/>
        <UserEarnings/>
      </div>
      <UserPerformance/>
      <PostList/>
    </ErrorBoundary>
  </DefaultLayout>
}