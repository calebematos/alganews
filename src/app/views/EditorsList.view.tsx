import DefaultLayout from "../layouts/Default/Default.layout";
import usePageTitle from "../../core/hooks/usePageTitle";
import EditorsList from "../features/EditorsList.feature";
import ErrorBoundary from "../components/ErrorBoundary";


export default function EditorsListView (){
  usePageTitle('Editors list')

  return <DefaultLayout>
    <ErrorBoundary>
      <EditorsList />
    </ErrorBoundary>
  </DefaultLayout>

}