import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default"

import PostList from "../features/PostList.features";
import UserMetrics from "../features/UserMetrics.feature";


export default function Home() {
  usePageTitle("Home")

  return <DefaultLayout>

    <UserMetrics/>
    <PostList/>

  </DefaultLayout>
}