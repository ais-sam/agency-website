

import PlanCard from './PlanCard';

const PlansGrid = ({plans}) => {
  return (
    <div className="container mb-14">
      <div className="flex flex-col lg:flex-row items-center mt-12 gap-7">
        {plans.map((el) => (
          <PlanCard key={el.id} plan={el} />
        ))}
      </div>
    </div>
  );
}

export default PlansGrid