import SaleMetrics from "../../components/ecommerce/SaleMetrics";
import OutOfStock from "../../components/ecommerce/OutOfStock";
import InProgressOrder from "../../components/ecommerce/InProgressOrder";
import WaittingForPaymentOrder from "../../components/ecommerce/WaittingForPaymentOrder";
import PageMeta from "../../components/common/PageMeta";
import TableSmallList from "../../components/ecommerce/TableSmallList";

export default function Sale() {
  return (
    <>
      <PageMeta
        title="Sale"
        description=""
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-8">
          <SaleMetrics />
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
            <div className="w-full md:flex-1">
              <InProgressOrder />
            </div>
            <div className="w-full md:flex-1">
              <WaittingForPaymentOrder />
            </div>
          </div>
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-4">
          <TableSmallList />
          <OutOfStock />
        </div>
      </div>
    </>
  );
}
