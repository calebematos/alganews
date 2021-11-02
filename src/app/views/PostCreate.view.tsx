import DefaultLayout from "../layouts/Default/Default.layout";
import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../features/PostForm.feature";
import ErrorBoundary from "../components/ErrorBoundary";



export default function PostCreateView (){
  usePageTitle('New post')

  return <DefaultLayout>
    <ErrorBoundary>
      <PostForm />
    </ErrorBoundary>
  </DefaultLayout>

}