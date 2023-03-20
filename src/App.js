import './App.css';
import { Card } from './Card';

function App() {
  const priceList = [
    {
      title:"FREE",
      price:"0",
      user:"Single User",
      userEnabler:true,
      storage:"5GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:false,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:false,
      subdomain:"Free Subdomain",
      subdomainEnabler:false,
      reports:"Monthly Sales Reports",
      reportsEnabler:false        
    },
    {
      title:"PLUS",
      price:"9",
      user:"5 User",
      userEnabler:true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subdomain:"Free Subdomain",
      subdomainEnabler:true,
      reports:"Monthly Sales Reports",
      reportsEnabler:false  
    },
    {
      title:"PRO",
      price:"49",
      user:"Unlimited User",
      userEnabler:true,
      storage:"150GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subdomainPrefix:"Unlimited",
      subdomain:"Free Subdomain",
      subdomainEnabler:true,
      reports:"Monthly Sales Reports",
      reportsEnabler:true  
    },
  ];

  
  return (
    <div className="App">
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
      {priceList.map((plist, index) => (
        <Card key={index} data={plist} />
      ))}
      </div>
    </div>
    </section>
    </div>
  );
}

export default App;


