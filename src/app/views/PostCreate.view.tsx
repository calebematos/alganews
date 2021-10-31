import DefaultLayout from "../layouts/Default/Default.layout";
import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../features/PostForm.feature";



export default function PostCreateView (){
  usePageTitle('New post')

  return <DefaultLayout>
    <PostForm />
  </DefaultLayout>

}