import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "../../../MainRoute";
import Spinner from "../../Loding/Spinner";
import { toast } from "react-toastify";
import EditSupplierProfile from "./EditSupplierProfile";
import ConfirmationModal from "./ConfirmationModal";

const SupplierProfile = () => {
  const { supplierId } = useParams();
  const [supplier, setSupplier] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [pendingChanges, setPendingChanges] = useState(null);
  const [changeType, setChangeType] = useState(null);

  useEffect(() => {
    Axios.get(`/admin/supplier/${supplierId}`)
      .then((response) => {
        setSupplier(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Supplier fetching error", error);
      });
  }, [supplierId]);

  const handleSave = (data) => {
    setPendingChanges(data);
    setChangeType("edit");
    setIsConfirmationOpen(true);
  };

  const handleStatusChange = () => {
    const updatedStatus = !supplier.isActive;
    setPendingChanges({ ...supplier, isActive: updatedStatus });
    setChangeType("status");
    setIsConfirmationOpen(true);
  };

  const confirmSave = () => {
    if (pendingChanges) {
      Axios.put(`/admin/supplier/${supplier?._id}`, pendingChanges)
        .then((response) => {
          const { message, data } = response.data;    
          setSupplier(data);
          setIsModalOpen(false);
          toast.success(message);
        })
        .catch((error) => {
          console.log("Supplier updating error", error);
          toast.error("Can't Update Profile");
        })
        .finally(() => {
          setIsConfirmationOpen(false);
          setPendingChanges(null);
          setChangeType(null);
        });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto capitalize">
      {/* Supplier Details */}
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-2">{supplier?.name}</h2>
        <div className="flex w-full justify-between">
          <p className="text-xl font-medium">Code: {supplier?.Bone_id}</p>
          <p
            className={`text-xl font-medium ${supplier?.isActive ? "text-green-600" : "text-red-600"}`}
          >
            {supplier?.isActive ? "Active" : "Deactivated"}
          </p>
        </div>
        <p className="text-gray-800">Location: {supplier?.location}</p>
        <p className="text-gray-800">Category: {supplier?.category}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Contact Information</h3>
        <p className="text-gray-800">Phone: {supplier?.phone}</p>
        <p className="text-gray-800">Address: {supplier?.address}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Account Details</h3>
        <div className="flex justify-between pr-5">
          <p className="text-gray-800">A/C No: {supplier?.account_no}</p>
          <p className="text-gray-800 uppercase">IFSC: {supplier?.ifsc}</p>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Drivers</h3>
        {supplier?.drivers?.length > 0 ? (
          <ul className="list-disc list-inside text-gray-800">
            {supplier?.drivers?.map((driver, index) => (
              <li key={index}>{driver.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-800">No drivers assigned</p>
        )}
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Tappers</h3>
        {supplier?.tappers?.length > 0 ? (
          <ul className="list-disc list-inside text-gray-800">
            {supplier?.tappers?.map((tapper, index) => (
              <li key={index}>{tapper.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-800">No tappers assigned</p>
        )}
      </div>

      {/* Edit and Change Status Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Edit Profile
        </button>
        <button
          onClick={handleStatusChange}
          className={`py-2 px-4 rounded ${supplier?.isActive ? "bg-red-500" : "bg-green-500"} text-white`}
        >
          {supplier?.isActive ? "Deactivate" : "Activate"}
        </button>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <EditSupplierProfile
          supplier={supplier}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}

      {/* Confirmation Modal */}
      {isConfirmationOpen && (
        <ConfirmationModal
          onConfirm={confirmSave}
          onCancel={() => setIsConfirmationOpen(false)}
          message={
            changeType === "status"
              ? `Are you sure you want to ${supplier?.isActive ? "deactivate" : "activate"} this supplier?`
              : "Are you sure you want to save these changes?"
          }
        />
      )}
    </div>
  );
};

export default SupplierProfile;
