import DefaultLayout from "../layouts/Default/Default.layout";
import usePageTitle from "../../core/hooks/usePageTitle";
import EditorsList from "../features/EditorsList.feature";


export default function EditorsListView (){
  usePageTitle('Editors')

  return <DefaultLayout>
    <EditorsList/>
  </DefaultLayout>

}