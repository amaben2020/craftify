const JobCard = () => {
  return (
    <article className="border-2 flex flex-col space-y-6 border-gray-500 rounded-xl p-3 min-w-[400px] bg-white text-black">
      JobCard
      <div className="bg-[#fbe2f4] flex flex-col space-y-6 rounded-xl p-6">
        <div className="flex justify-between">
          <div>20th may, 2023</div>

          <p>ribbon</p>
        </div>

        <div className="flex justify-between">
          <h3 className="font-bold text-black text-2xl">Plumber</h3>

          <div>Image</div>
        </div>

        <div className="flex justify-between">
          <p>Part time</p>
          <p>Full time</p>
          <p>A</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="font-bold text-black ">Rate</p>
        <button className="bg-black p-3 text-white text-lg rounded-xl">
          Details
        </button>
      </div>
    </article>
  );
};

export default JobCard;
