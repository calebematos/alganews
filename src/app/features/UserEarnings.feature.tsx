import styled from "styled-components"
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor"

export default function UserEarnings() {


return <UserEarningsWrapper>
    <ValueDescriptor color="primary" description="Earnings in the month" value={56322.32} isCurrency />
    <ValueDescriptor color="primary" description="Earnings in the week" value={56322.32} isCurrency />
    <ValueDescriptor color="default" description="Usual earnings" value={56322.32} isCurrency />
    <ValueDescriptor color="default" description="Total words" value={2_345_345} />
  </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 16px;
`
