import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function UserView() {

  const params = useParams<{ userId: string }>();
  const query = useQuery()

  useEffect(() => {
    console.log(query.get('name'))
  }, [])

  return <div>
    <h1>User - { params.userId }</h1>
  </div>
}