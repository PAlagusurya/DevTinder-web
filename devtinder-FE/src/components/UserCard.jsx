import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, gender, age, about, photoURL } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoURL} alt="profile" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {gender && age && (
          <p className="font-semibold">{age + ", " + gender}</p>
        )}
        <p className="font-semibold">{about}</p>
        <div className="card-actions justify-center my-2">
          <button className="btn bg-red-600 hover:bg-red-800 text-white">
            Ignore
          </button>
          <button className="btn bg-green-600 hover:bg-green-800 text-white">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
