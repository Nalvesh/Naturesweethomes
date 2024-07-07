import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';

import Wework from './components/Wework/index';

import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';

import Insta from './components/Insta/index';
import FloatingButton from './components/FloatButton/FloatButton';
import LiveViews from './components/LiveView/LiveView';



export default function Home() {
  return (
    <main>
      <Banner />
      <LiveViews/>
     <FloatingButton/> 
      <Articles />
      <Wework />
      <Insta />
      <Aboutus />
      <Dedicated />
      {/* <Featured /> */}
      <FAQ />
      <Testimonials />
    </main>
  )
}
