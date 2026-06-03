import Card from './components/card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 days ago",
    posts: "12 Open Positions",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    posts: "8 Open Positions",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 day ago",
    posts: "5 Open Positions",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "3 days ago",
    posts: "20 Open Positions",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "6 days ago",
    posts: "7 Open Positions",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 days ago",
    posts: "3 Open Positions",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "2 days ago",
    posts: "10 Open Positions",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "1 week ago",
    posts: "6 Open Positions",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Chennai, India"
  }
];



  return (
    <div className="app-wrapper">
      {jobOpenings.map(function(elem){
       return  <Card brandLogo = {elem.brandLogo} company={elem.companyName} datePosted={elem.datePosted} posts={elem.posts} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location} />
      })}
      
    </div>
  )
}

export default App
