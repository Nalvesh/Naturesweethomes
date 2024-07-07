import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';
import EnquiryPage from './components/Enquiry/EnquiryPage';
import ContactForm from './components/ContactForm/ContactForm';
import FloatingButton from './components/FloatButton/FloatButton';
import LiveViews from './components/LiveView/LiveView';
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundry';


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
