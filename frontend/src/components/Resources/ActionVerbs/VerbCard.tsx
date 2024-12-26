"use client";

interface VerbCardProps {
  title: string;
  verbs: string[];
}
const VerbCard: React.FC<VerbCardProps> = ({ title, verbs }) => {
  return (
    <div className="mt-5 w-full rounded-sm border border-stroke bg-white px-5 pb-5 pt-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="mb-3 flex justify-between">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            {title.toUpperCase()}
          </h5>
        </div>
      </div>

      <hr className="my-4 border-t border-gray-300 dark:border-gray-600" />

      <div className="mx-auto mt-4 grid w-full max-w-3xl grid-cols-3 gap-4">
        {verbs.map((verb, index) => (
          <div
            key={index}
            className="text-center text-base font-light text-gray-600 dark:text-gray-400"
          >
            {verb}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerbCard;
