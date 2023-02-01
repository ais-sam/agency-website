import React from 'react'
import { CenterTitle, PlansGrid } from '../components';
import { Hero, Newsletter, Services } from '../sections'

const Pricing = () => {
    const plans = [
        {
            id:1,
            price:78,
            img:"https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=907&q=80"
        },
        {
            id:2,
            price:88,
            img:"https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        },
        {
            id:3,
            price:98,
            img:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"
        }
    ]
  return (
    <>
      <Hero title="pricing" />

      <div className="bg-gray-100 pt-20">
        <CenterTitle title="price and plans" subtitle="pricing" />
        <PlansGrid plans={plans} />
        <Services className="my-28" />
        <Newsletter />
      </div>
    </>
  );
}

export default Pricing