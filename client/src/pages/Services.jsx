import {
  Categories,
  Counter,
  Feeds,
  Services as ServicesList,
  Team,
} from "../components/common/page-components";

const Services = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <ServicesList />
      <Categories />
      <Counter />
      <Team />
      <Feeds />
    </div>
  );
};

export default Services;
