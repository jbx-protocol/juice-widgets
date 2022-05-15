import PayActivityItem from "./PayActivityItem"

export default function ActivityFeed() {
  const activity []

  return <div>
    {activity.map(event => <PayActivityItem event={event}/>)}
  </div>
}
