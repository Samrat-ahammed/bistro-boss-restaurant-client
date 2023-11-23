import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Component/SectionTitle";
import useAuth from "../../../CustomHooks/useAuth";
import useAxios from "../../../CustomHooks/useAxios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],

    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        title={"Payment-History"}
        subtitle={"----------whats news--------"}
      ></SectionTitle>

      <div>
        <h2>Total Payment {payments.length}</h2>

        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Price</th>
                  <th>Transaction id</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {payments.map((items, index) => (
                  <tr key={items._id}>
                    <th>{index + 1}</th>
                    <td>{items.transactionId}</td>
                    <td>{items.transactionId}</td>
                    <td>{items.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
