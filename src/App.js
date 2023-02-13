
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        isLogo
        title="Bookie"
        description= "Aplikācija, kas paradzēta vienkāršot un uzlabot lasīšanas pieredzi"
        // showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Saglabā grāmatas"
        description="Nofotografē savas grāmatas, un mēs tās pārvērtīsim par
        virtuālu bibliotēku, lai būtu sajūta, ka lasāmmateriāls viemēr ir pa rokai"
        mockupImg={assets.homeCards}
        reverse
      />
      <SectionWrapper 
        title="Lasi un pieraksti"
        description="Sāc lasīšanas sesijas, pieraksti atziņas vai citē tieši no grāmatas, kā arī
        iegūsti ieskatu par savu
        lasīšanas progresu"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Izvirzi mērķus un paplašini savu plauktu"
        description="Mēs palīdzēsim sasniegt vēlamos rezultātus un ieteiksim jaunas grāmatas, lai lasīšana kļūtu par ikdienišķu ieradumu,"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      {/* <Features /> */}

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by bookies {" "}
        <span className="bold">for bookies</span>
        </p>
      </div>
    </>
  );
}

export default App;
