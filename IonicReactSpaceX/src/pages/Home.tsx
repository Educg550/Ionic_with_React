import {
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import { useLaunchesPastQuery } from '../generated/graphql'
import './Home.css'

const Home: React.FC = () => {
  // const { data, loading } = useQuery<LaunchesPastQuery>(LAUNCHES_PAST_QUERY)
  const { data, loading } = useLaunchesPastQuery()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data &&
          data.launchesPast.map(launch => (
            <IonItem key={launch.id}>
              {launch.mission_name} | {launch.rocket.rocket_name}
            </IonItem>
          ))
        )}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  )
}

export default Home
