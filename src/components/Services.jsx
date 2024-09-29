import Footer from "./common/Footer"
import Navbar from "./common/Navbar"
import TopSection from "./common/TopSection"
import ServiceCard from "./mui components/ServiceCard"
import coverInterior from '../assets/coverInterior.jpg'
import cover3D from '../assets/cover3D.jpg'
import renovation from '../assets/renovation.jpg'
import plan from '../assets/plan.avif'
import autocad from '../assets/autocad.jpg'
import building from '../assets/building.webp'

const Services = () => {

  const data = [
    { header: "Building Construction", description: "hello working successfully", image: building },
    { header: "Interior & Exterior Designing", description: "interior designing at primactive", image: coverInterior },
    { header: "3D Designing & Govt.Approvals", description: "Mep solutions", image: cover3D },
    { header: "Renovation", description: "Renoavation for old homes", image: renovation },
    { header: "Plan, Estimation& Supervision", description: "pllanning", image: plan },
    { header: "AutoCAD & MEP Drawings", description: "pllanning", image: autocad }
  ];

  return (
    <>
      <TopSection />
      <div className="bg-slate-500 w-full">
        <div className="pt-1"><Navbar /></div>
      </div>
      <header className="flex justify-center text-2xl md:text-3xl lg:text-5xl font-bold my-4 px-2 text-center text-neutral-600">
        Our Services
      </header>
      <div className="w-full px-4 md:px-6 lg:px-8 max-w-7xl sm:mx-20 mb-8">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((service, index) => (
            <ServiceCard
              className="md:max-w-xs lg:max-w-sm xl:max-w-md"
              key={index}
              header={service.header}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services