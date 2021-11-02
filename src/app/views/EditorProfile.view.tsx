import ErrorBoundary from "../components/ErrorBoundary";
import EditorProfile from "../features/EditorProfile.feature";
import DefaultLayout from "../layouts/Default/Default.layout";

function EditorProfileView(){
  
  return <DefaultLayout>
    <ErrorBoundary>
      <EditorProfile />
    </ErrorBoundary>
  </DefaultLayout>
}


export default EditorProfileView