import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import PageMeta from "../../components/common/PageMeta";

export default function Sale() {
  return (
    <>
      <PageMeta
        title="POS"
        description=""
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />
          <div className="flex gap-4 md:gap-6">
            <RecentOrders />
            <RecentOrders />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-5 space-y-6">
          <RecentOrders />
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
