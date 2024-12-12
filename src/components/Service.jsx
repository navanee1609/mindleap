import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ServiceImg1 from "../assets/service1.webp"
import ServiceImg2 from "../assets/service2.webp"
import ServiceImg3 from "../assets/service3.webp"
import ServiceImg4 from "../assets/service4.webp"
const Service = () => {
  return (
   <div id="service" className='bg-[f7f8fc]'>
    <div className='pt-28 px-4 container mx-auto'>
    <div className='text-center space-y-5'>
        <h2 className="text-heroBg font-bold text-4xl font-secondary">What can we do for you ?</h2>
        <p className='md:w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur exercitationem laudantium, esse in ipsam suscipit commodi ratione dolorem cumque voluptatem quo temporibus!</p>
    </div>
    {/* service cstegory */}
    <div className='py-12 md:w-4/5 mx-auto'>
    <Tabs>
    <TabList className="flex items-center justify-center flex-wrap md:gap-8 gap-4">
      <Tab>Couple Counselling</Tab>
      <Tab>Parenting Skills</Tab>
      <Tab>Feeling Struck</Tab>
      <Tab>Self Confidence</Tab>
    </TabList>

    <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
        <div className='flex flex-col md:flex-row gap-8 mt-8'>
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
            <h3 className='text-3xl font-semibold text-primary mb-4'>Couple Counselling</h3>
            <p className='mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nulla voluptas, delectus hic ipsam quae qui error natus aspernatur. Quisquam sequi perferendis modi, ratione corporis non! Officia nostrum ipsam dolores explicabo, ullam perferendis.</p>
            <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
            <ul className='list-disc list-inside space-y-3'>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
            </ul>

        </div>
        <div className='md:w-1/2'>
            <img src={ServiceImg1} alt="" className='w-full h-auto rounded-2xl object-cover'/>
        </div>

        </div>
       
    </TabPanel>
    <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
        <div className='flex flex-col md:flex-row gap-8 mt-8'>
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
            <h3 className='text-3xl font-semibold text-primary mb-4'>Parenting Skills</h3>
            <p className='mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nulla voluptas, delectus hic ipsam quae qui error natus aspernatur. Quisquam sequi perferendis modi, ratione corporis non! Officia nostrum ipsam dolores explicabo, ullam perferendis.</p>
            <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
            <ul className='list-disc list-inside space-y-3'>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
            </ul>

        </div>
        <div className='md:w-1/2'>
            <img src={ServiceImg2} alt="" className='w-full h-auto rounded-2xl object-cover'/>
        </div>

        </div>
       
    </TabPanel>
    <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
        <div className='flex flex-col md:flex-row gap-8 mt-8'>
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
            <h3 className='text-3xl font-semibold text-primary mb-4'>Feeling Struck</h3>
            <p className='mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nulla voluptas, delectus hic ipsam quae qui error natus aspernatur. Quisquam sequi perferendis modi, ratione corporis non! Officia nostrum ipsam dolores explicabo, ullam perferendis.</p>
            <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
            <ul className='list-disc list-inside space-y-3'>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
            </ul>

        </div>
        <div className='md:w-1/2'>
            <img src={ServiceImg3} alt="" className='w-full h-auto rounded-2xl object-cover'/>
        </div>

        </div>
       
    </TabPanel>
    <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
        <div className='flex flex-col md:flex-row gap-8 mt-8'>
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
            <h3 className='text-3xl font-semibold text-primary mb-4'>Self-Confidence</h3>
            <p className='mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nulla voluptas, delectus hic ipsam quae qui error natus aspernatur. Quisquam sequi perferendis modi, ratione corporis non! Officia nostrum ipsam dolores explicabo, ullam perferendis.</p>
            <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
            <ul className='list-disc list-inside space-y-3'>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
            </ul>

        </div>
        <div className='md:w-1/2'>
            <img src={ServiceImg4} alt="" className='w-full h-auto rounded-2xl object-cover'/>
        </div>

        </div>
       
    </TabPanel>
  </Tabs>
    </div>
    </div>

   </div>
  )
}

export default Service