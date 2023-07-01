import {subscriptionPlans} from "../../constants";
import { Container } from '@/components/Container'
import {SwirlyDoodle, Plan} from '@/components/Pricing'

export function Pricing() {
  return (

    <section
      id="pricing"
      aria-label="Pricing"
      className="w-full bg-slate-900 py-20 sm:py-32 "
    >
      <Container className="w-full">
        <div className="md:text-center w-full">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400" />
              <span className="relative">Simple pricing,</span>
            </span>{' '}
            for everyone. <br/><br/>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            It doesn't matter the size and scale of your training & education needs,<br/>
             Creative Learning Services has you covered.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-4xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
        {subscriptionPlans.map((plan, index) => (
                <Plan
                    key={index}
                    name={plan.name}
                    price={plan.price}
                    description={plan.description}
                    href={plan.href}
                    features={plan.features.map(feature => feature.text)}
                    featured={plan.name === 'Small Business'} // assuming that the plan with the name 'Small Business' should be featured
                />
            ))}
        </div>
        
      </Container>
    </section>
  )
}

export default Pricing;