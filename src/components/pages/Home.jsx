/**
 * The external imports
 */
import Banner from "../section/banner/Banner";
import Kinesiologie from "../section/kinesiologie/Kinesiologie";
import QuiJeSuis from "../section/quiJeSuis/QuiJeSuis";
import Reservation from "../section/reservation/reservation";

/**
 * The internal imports
 */

export default function Home() {
  return (
    <>
      <header id="moveUp">
        <Banner />
      </header>
      <Kinesiologie />
      <QuiJeSuis />
      <Reservation />
    </>
  );
}
