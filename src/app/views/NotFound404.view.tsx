import usePageTitle from "../../core/hooks/usePageTitle"

export default function NotFound404() {
  usePageTitle("Not found")
  return <div>
    <h1>Not Found 404</h1>
  </div>
}